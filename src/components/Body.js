import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Navigation";
// import About from "../pages/About";
import User from "../pages/User";
import Users from "../pages/Users";
import Home from "../pages";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

function Body() {
  const googleUser = useSelector((state) => state.user.googleUser);
  return (
    <div>
      <Nav />
      <Switch>
        <ProtectedRoute exact path="/users/:uuid" component={User} />
        <ProtectedRoute path="/users" exact component={Users} />
        <Route path="/login" exact>
          {googleUser ? <Redirect to="/users" /> : <Login />}
        </Route>

        <ProtectedRoute path="/" exact>
          <Home></Home>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default Body;
