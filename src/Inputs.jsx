import React, { useState } from "react";
import withData from "./withData";

const Inputs = (props) => {
  console.log(props);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    allo: "",
  });

  const [data, setData] = useState(props.dataInit);

  const handleClick = () => {
    console.table(values);
  };

  const handleChange = (key) => (e) => {
    const obj = {
      ...values,
      [key]: e.target.value,
    };
    setValues(obj);
  };

  const addInputHandle = () => {
    // setData((state) => [...state, `${Math.random()}`]);
    setData([...data, `${Math.random()}`]);
  };

  return (
    <div>
      {data.map((elem) => (
        <div key={elem}>
          <input type="text" name={elem} onChange={handleChange(elem)}></input>
          letters count: {values[elem].length}
        </div>
      ))}

      <button onClick={handleClick}>send</button>
      <button onClick={addInputHandle}>add input</button>
    </div>
  );
};

export default withData(Inputs);
