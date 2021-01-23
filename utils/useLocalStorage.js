import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  let value = initialValue; 
  const [storedValue, setStoredValue] = useState(value);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    const itemToStore =  item ? JSON.parse(item) : initialValue;
    setStoredValue(itemToStore);
  }, []);


  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
