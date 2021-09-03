import React, { useState, useEffect } from "react";
import withData from "./withData";

const Inputs = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    allo: "",
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
