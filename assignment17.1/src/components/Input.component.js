import '../styles/Input.css'
import { useRef } from 'react';
import { read, update, remove, create } from "../services/localStorageAPI";

const Input = ({setTodoList}) => {
  const inputRef = useRef(null);
  const addButtonHandler = () => {
    if(inputRef.current.value == '') return;

    const task = {
      name: inputRef.current.value,
      completed: false,
    }
    inputRef.current.value = ''

    create(task);
    setTodoList(read());
  }

  return (
    <div className="Input-container">
      <input ref={inputRef} className='Input-text-input' type="text" placeholder="add new task to todo list..." name="search" />
      <button onClick={addButtonHandler} className='Input-button'>Add</button>
    </div>
  );
};
export { Input };