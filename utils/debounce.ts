import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * const [search, setSearch] = useState("")
 * const debouncedSearch = useDebounce(search, 400)
 * 
 * useEffect(() => {
 *  if (debouncedSearch) {
 *    search(debouncedSearch)
 *  }
 * }, [debouncedSearch])
 */