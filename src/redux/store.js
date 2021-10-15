import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import user from "./reducers/user";

export default configureStore({
  reducer: { counterField: counter, user },
});
