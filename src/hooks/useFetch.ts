import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
}

const INITIAL_STATE: State<undefined> = {
  error: undefined,
  data: undefined,
};

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'loading':
      return { ...INITIAL_STATE };
    case 'fetched':
      return { ...INITIAL_STATE, data: action.payload };
    case 'error':
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
}

function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return () => {};

    cancelRequest.current = false;
    dispatch({ type: 'loading' });
    if (cache.current[url]) {
      dispatch({ type: 'fetched', payload: cache.current[url] });
    }

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((res) => {
        if (!cancelRequest.current) {
          cache.current[url] = res as T;
          dispatch({ type: 'fetched', payload: res as T });
        }
      })
      .catch((err) => {
        if (!cancelRequest.current) dispatch({ type: 'error', payload: err });
      });

    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);

  return state;
}

export default useFetch;
