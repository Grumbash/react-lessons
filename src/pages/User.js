import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function User() {
  const value = useSelector((state) => state.valueField.value);
  const [user, setUser] = useState(null);

  const { uuid } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${uuid}`).then((res) => {
      setUser(res.data.data);
      console.log(res.data);
    });
  }, [uuid]);

  if (user) {
    return (
      <div style={{ padding: "16px" }}>
        <h1>{user.first_name}</h1>
        <img
          src={user.avatar}
          alt="User avatar"
          style={{
            border: "1px solid #ddd",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
          }}
        />
        <p>
          <i>{user.email}</i>
        </p>
        <p>{value}</p>
      </div>
    );
  } else {
    return <h1 style={{ color: "red" }}> There is no user! </h1>;
  }
}

export default User;
