import React, { useContext, useRef } from "react";
import { Context } from "../context";
import { decrement, increment } from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";

function Home() {
  const count = useSelector((state) => state.count);
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

  return (
    <div style={{ padding: "5px" }}>
      <h2 style={{ color: "red" }}>Home</h2>
      <input ref={myRef} style={{ display: "block" }} />
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
