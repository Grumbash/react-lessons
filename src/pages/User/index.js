import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./styles.css";
import SingleUser from "../../components/User";

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
      <>
        <SingleUser user={user}></SingleUser>
        <p>{value}</p>
      </>
    );
  } else {
    return <h1 className="user__color_error"> There is no user! </h1>;
  }
}

export default User;
