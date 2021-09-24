import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./context";
import Body from "./components/Body";

export default function App() {
  const [isDark, toggleIsDark] = useState(false);
  const ctx = {
    toggleTheme: () => {
      toggleIsDark(!isDark);
    },
    theme: isDark ? "dark" : "light",
  };
  return (
    <Context.Provider value={ctx}>
      <Router>
        <Body></Body>
      </Router>
    </Context.Provider>
  );
}
