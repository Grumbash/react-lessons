import "./App.css";
import React, { useState, useEffect, memo } from "react";

import Test from "./Test";

function Product(props) {
  return (
    <li>
      <span>
        {props.element} - {props.index}
      </span>
      <button onClick={props.deleteFunc(props.index)}>X</button>
    </li>
  );
}

let newProductValue = "";

function App() {
  const [state, setState] = useState(["Хлеб", "Сыр", "Молоко", "Краб"]);
  const [value, setValue] = useState("");
  const handleClick = () => {
    setState([...state, newProductValue]);
    setValue("");
  };

  const handleDelete = (index) => () => {
    const filteredState = state.filter((e, i) => i !== index);
    setState(filteredState);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <ul>
        {state.map((element, index) => (
          <Product
            element={element}
            key={index}
            index={index}
            deleteFunc={handleDelete}
          />
        ))}
      </ul>
      {state.length < 6 ? (
        <div>
          <input type="text" onChange={handleChange} value={value}></input>
          <button onClick={handleClick}>Add some product</button>
        </div>
      ) : (
        <Test hello={"hello"}></Test>
      )}
    </div>
  );
}

export default memo(App);
