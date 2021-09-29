import { INCREMENT, DECREMENT } from "./type";

export const increment = (arg) => {
  return {
    type: INCREMENT,
    payload: arg + 1,
  };
};

export const decrement = (arg) => {
  return {
    type: DECREMENT,
    payload: arg - 1,
  };
};
