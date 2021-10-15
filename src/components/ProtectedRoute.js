import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const googleUser = useSelector((state) => state.user.googleUser);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        googleUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
