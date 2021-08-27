import "./App.css";
import React, { useState } from "react";

const meat = "Мясо";

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

function App() {
  const [state, setState] = useState(["Хлеб", "Сыр", "Молоко", "Краб"]);
  const handleClick = () => {
    setState([...state, meat]);
  };

  const handleDelete = (index) => () => {
    const filteredState = state.filter((e, i) => i !== index);
    setState(filteredState);
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
        <button onClick={handleClick}>Add some product</button>
      ) : (
        "Stop"
      )}
    </div>
  );
}

export default App;
