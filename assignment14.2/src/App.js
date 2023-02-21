import { useState, useEffect } from "react";
import "./App.css";
import Set from "./components/Set";
import Input from "./components/Input";
import fetchUsers from "./services/FetchUsers";

function App() {
  const [filterString, setFilterString] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = () => await fetchUsers(10);
    console.log("😂😂");
    console.log(users);
    console.log("😂😂");
    setUsers(users);
  }, []);

  return (
    <div className="container">
      <Input />
      <Set filterString={filterString} number={10} />
    </div>
  );
}

export default App;
