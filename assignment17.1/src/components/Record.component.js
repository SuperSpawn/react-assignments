import '../styles/Record.css'

import React from "react";
import { read, update, remove, create } from "../services/localStorageAPI";

export const Record = ({recordData, setTodoList, index, todoList}) => {
  const deleteHandler = () => {
    remove(recordData.id);
    setTodoList(read());
  }
  const checkHandler = () => {
    if(todoList[index].completed === false) {
      todoList[index].completed = true;
      update(todoList)
      setTodoList(read());
    }
  }

  return (
    <div className="Record-container">
      <div onClick={checkHandler} className='Task-container'>
        { (recordData.completed === true) ? <p className="Record-status Record-check">[Done]</p> : <p className="Record-status Record-cross">[Working]</p>}
        <p className="Record-task-name">{recordData.name}</p>
      </div>
      <button onClick={deleteHandler} className="Record-delete-button">Delete</button>
    </div>
  )
};
