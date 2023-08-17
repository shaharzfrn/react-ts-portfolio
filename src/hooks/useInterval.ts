import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

function useInterval(
  timeout: number | null,
  callback: IntervalCallback = () => {}
) {
  const savedCallback = useRef<IntervalCallback>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!timeout) return () => {};

    const timer = setInterval(() => {
      savedCallback.current();
    }, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [timeout]);
}

export default useInterval;
