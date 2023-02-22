import "./App.css";
import { Input } from "./components/Input.component";
import { RecordList} from "./components/RecordList.component";

import React,{useState, useEffect} from "react";
import { read, update, remove, create } from "./services/localStorageAPI";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedList = read();
    if(storedList == null) {
      update([]);
    }
    else {
      setTodoList(storedList);
    }
  },[]);

  return (
    <div className="container">
      <Input
        setTodoList={setTodoList}
      />
      <RecordList
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  )
}

export default App;
