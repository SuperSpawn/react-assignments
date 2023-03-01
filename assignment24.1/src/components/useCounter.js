import {useState} from 'react'

export const useCounter = (number) => {
  const [value, setValue] = useState(number);

    const addOne = () => {
        setValue((prev) => prev + 1);
    }
    const removeOne = () => {
        setValue((prev) => prev - 1);
    }
    const double = () => {
        setValue((prev) => prev * 2);
    }
    const divide = () => {
        setValue((prev) => prev / 2);
    }


  return [value, addOne, removeOne, double, divide];
}