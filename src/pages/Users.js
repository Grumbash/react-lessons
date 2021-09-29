import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "../components/User";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setUsers(res.data.data);
    });
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

export default Users;
