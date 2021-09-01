import "./App.css";
import React, { useState } from "react";

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
      <input type="text" onChange={handleChange}></input>

      {state.length < 6 ? (
        <div>
          <input type="text" onChange={handleChange} value={value}></input>
          <button onClick={handleClick}>Add some product</button>
        </div>
      ) : (
        "Stop"
      )}
    </div>
  );
}

export default App;
