import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import store from "./redux/store";
import { Context } from "./context";
import Body from "./components/Body";

const theme = createTheme();

export default function App() {
  const [isDark, toggleIsDark] = useState(false);

  const ctx = {
    toggleTheme: () => {
      toggleIsDark(!isDark);
    },
    theme: isDark ? "dark" : "light",
  };

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={ctx}>
        <Router>
          <Provider store={store}>
            <Body></Body>
          </Provider>
        </Router>
      </Context.Provider>
    </ThemeProvider>
  );
}
