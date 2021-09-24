import React, { useContext, useRef } from "react";
import { Context } from "../context";

function Home() {
  const myRef = useRef();
  const context = useContext(Context);

  const handleClick = () => {
    context.toggleTheme();
    myRef.current.value = "LOL";
  };

  return (
    <div style={{ padding: "5px" }}>
      <h2 style={{ color: "red" }}>Home</h2>
      <input ref={myRef} style={{ display: "block" }} />
      <button onClick={handleClick}>add focus</button>
    </div>
  );
}

export default Home;
