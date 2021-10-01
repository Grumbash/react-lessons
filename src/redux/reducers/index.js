import { combineReducers } from "redux";
import counter from "./counter";
import value from "./value";
import user from "./user";

export default combineReducers({
  counterField: counter,
  valueField: value,
  user,
});
