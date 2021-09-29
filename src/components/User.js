import React from "react";

const User = (props) => {
  const { user } = props;
  return (
    <div>
      <div className="user__container">
        <h1>{user.first_name}</h1>
        <img src={user.avatar} alt="User avatar" className="user__avatar" />
        <p>
          <i>{user.email}</i>
        </p>
      </div>
    </div>
  );
};

export default User;
