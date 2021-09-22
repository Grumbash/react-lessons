import React, { useRef, useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

const Context = createContext("101");

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

function Body() {
  return (
    <div>
      <Nav />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:uuid">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Nav() {
  const context = useContext(Context);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home, {context.theme}</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
      </ul>
    </nav>
  );
}

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

function About() {
  return <h2 style={{ color: "blue" }}>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function User() {
  const { uuid } = useParams();
  return <h1>User {uuid}</h1>;
}
