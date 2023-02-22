import '../styles/RecordList.css'

import React from "react";
import { Record } from "./Record.component";


export const RecordList = ({todoList, setTodoList}) => {
    return (
        <div className='RecordList-container'>
            {
                todoList.map((todo, index) => {
                    return (
                        <Record
                            recordData={todo}
                            setTodoList={setTodoList}
                            index={index}
                            todoList={todoList}
                        />
                    )
                })
            }
        </div>
    )
};
