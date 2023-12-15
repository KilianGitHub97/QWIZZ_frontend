import { useEffect, useRef, useCallback } from 'react';

export function useOutsideClick<T extends HTMLElement>(callback: () => void): React.RefObject<T> {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return ref;
}