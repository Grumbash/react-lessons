import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

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

export default Nav;
