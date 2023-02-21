import React from "react";
const Input = () => {

    const changeHandler = () => {
        const timeout = setTimeout(() => {
            
        }, 1000);
    }

  return (
    <div>
      <input onChange={() => changeHandler()} type="text" placeholder="Search by name..." name="search" />
    </div>
  );
};
export default Input;