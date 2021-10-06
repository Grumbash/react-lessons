import React, { useContext, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Context } from "../context";
import { decrement, increment, setValueToReduxState } from "../redux/actions";

function Home() {
  const count = useSelector((state) => state.counterField.count);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const context = useContext(Context);

  const handleClick = () => {
    context.toggleTheme();
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
        <TextField
          value={value}
          onChange={handleValueChange}
          variant="standard"
          label="Some value"
        />
        <Button variant="outlined" onClick={addValue}>
          Add value to redux
        </Button>
      </div>
      <Button variant="outlined" onClick={handleClick}>
        Change theme
      </Button>
      <p>
        <span>User id: {count}</span>
        <Button variant="outlined" onClick={handleIncrementClick}>
          +1
        </Button>
        <Button variant="outlined" onClick={handleDecrementClick}>
          -1
        </Button>
      </p>
    </div>
  );
}

export default Home;
