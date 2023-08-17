import { useState, useEffect, useRef } from 'react';

type FetchCallback<T> = (data: T) => T;

function useFetchWithCallback<T>(
  url: string | undefined,
  options: RequestInit = {},
  callback: FetchCallback<T> = (data: T) => data
) {
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) {
      if (callback && typeof callback === 'function') {
        setData(callback({} as T));
        setLoading(false);
      }
      return () => {};
    }

    cancelRequest.current = false;

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((res) => {
        let finalData = res;
        if (!cancelRequest.current) {
          if (callback && typeof callback === 'function') {
            finalData = callback(res);
          }
          setData(finalData);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelRequest.current) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelRequest.current = true;
    };
  }, [url, options, callback]);

  return { data, error, loading };
}

export default useFetchWithCallback;
