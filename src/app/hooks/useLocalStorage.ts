import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedLocallyValue, setStoredLocallyValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = window.localStorage.getItem(key);
        setStoredLocallyValue(
          storedValue ? JSON.parse(storedValue) : initialValue
        );
      } catch (error) {
        console.error(
          "Error retrieving storedLocallyValue from local storage:",
          error
        );
        setStoredLocallyValue(initialValue);
      }
    }
  }, [key, initialValue]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedLocallyValue));
      } catch (error) {
        console.error(
          "Error storing storedLocallyValue in local storage:",
          error
        );
      }
    }
  }, [key, storedLocallyValue]);

  return [storedLocallyValue, setStoredLocallyValue] as [
    T,
    Dispatch<SetStateAction<T>>
  ];
}
