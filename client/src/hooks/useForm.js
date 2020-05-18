// write your custom hook here to control your checkout form

import { useState } from "react";

const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

const useLocalStorage = initialValue => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem("ReactPlants");
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem("ReactPlants", JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useForm;