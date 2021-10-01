import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { useSelector } from "react-redux";

function Nav() {
  const context = useContext(Context);
  const { count } = useSelector((state) => state.counterField);
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
          <Link to={`/users/${count}`}>User {count}</Link>
        </li>
        <li>
          <Link to={`/users/dog`}>Dog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
