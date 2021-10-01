import * as count from "./count";
import * as value from "./value";
import * as user from "./user";

const { increment, decrement } = count;
const { setValueToReduxState } = value;
const { setUser, setDog, getUser } = user;

export { increment, decrement, setValueToReduxState, setUser, setDog, getUser };
