import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./Navigation";
import About from "../pages/About";
import User from "../pages/User";
import Users from "../pages/Users";
import Home from "../pages";
import Login from "../pages/Login";

function Body() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <Switch>
      <Route exact path="/users/:uuid">
        <User />
      </Route>
      <Route path="/users" exact>
        <Users />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/" exact>
        {loggedIn ? <Redirect to="/users" /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default Body;
