import { combineReducers } from "redux";
import counter from "./counter";
import value from "./value";

export default combineReducers({
  counterField: counter,
  valueField: value,
});
