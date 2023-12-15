import { useState, ChangeEvent } from 'react';

interface FormData {
  [key: string]: string;
}

type SetErrorFunction = (key: string, error: string) => void;

interface Errors {
    [key: string]: string;
  }
  

const useFormData = (initialState: FormData = {}): [FormData,Errors, (e: ChangeEvent<HTMLInputElement>) => void, SetErrorFunction, () => void] => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormData>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const setError: SetErrorFunction = (key, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: error,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
    setErrors({});
  };

  return [formData,errors, handleChange, setError, resetFormData];
};

export default useFormData;