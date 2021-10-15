import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

function Nav() {
  const googleUser = useSelector((state) => state.user.googleUser);
  const theme = useTheme();
  const { count } = useSelector((state) => state.counterField);
  return (
    <nav
      style={{
        boxShadow: theme.shadows[4],
      }}
    >
      <ul
        style={{
          margin: `0px 0px ${theme.spacing(1)}`,
          padding: `${theme.spacing(1.5)}`,
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link to="/">Home</Link>
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
        <li>
          <Avatar alt="User Avatar" src={googleUser?.imageUrl} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
