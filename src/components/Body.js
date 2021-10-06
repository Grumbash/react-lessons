import { Route, Switch } from "react-router-dom";
import Nav from "./Navigation";
import About from "../pages/About";
import User from "../pages/User";
import Users from "../pages/Users";
import Home from "../pages";

function Body() {
  return (
    <Switch>
      <Route path="/users/:uuid">
        <User />
      </Route>
      <Route path="/">
        <Users />
      </Route>
    </Switch>
  );
  // return (
  //   <div>
  //     <Nav />
  //     {/* A <Switch> looks through its children <Route>s and
  //           renders the first one that matches the current URL. */}
  //     <Switch>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/users/dog">
  //         <p>DOG</p>
  //       </Route>
  //       <Route path="/users/:uuid">
  //         <User />
  //       </Route>
  //       <Route path="/users">
  //         <Users />
  //       </Route>
  //       <Route path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </div>
  // );
}

export default Body;
