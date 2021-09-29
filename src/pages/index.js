import React, { useContext, useRef, useState } from "react";
import { Context } from "../context";
import { decrement, increment, setValueToReduxState } from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";

function Home() {
  const count = useSelector((state) => state.count);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const myRef = useRef();
  const context = useContext(Context);

  const handleClick = () => {
    context.toggleTheme();
    myRef.current.value = "LOL";
  };

  const handleIncrementClick = () => {
    const actionIncrement = increment();
    dispatch(actionIncrement);
  };

  const handleDecrementClick = () => {
    const actionDecrement = decrement();
    dispatch(actionDecrement);
  };

  const addValue = () => {
    const action = setValueToReduxState(value);
    setValue("");
    dispatch(action);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "5px" }}>
      <h2 style={{ color: "red" }}>Home</h2>
      <div>
        <input value={value} ref={myRef} onChange={handleValueChange} />
        <button onClick={addValue}>Add value to redux</button>
      </div>
      <button onClick={handleClick}>add focus</button>
      <p>
        <span>Count {count}</span>
        <button onClick={handleIncrementClick}>+1</button>
        <button onClick={handleDecrementClick}>-1</button>
      </p>
    </div>
  );
}

export default Home;
