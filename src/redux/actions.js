import { INCREMENT, DECREMENT, SET_VALUE_TO_REDUX_STATE } from "./type";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const setValueToReduxState = (value) => {
  return {
    type: SET_VALUE_TO_REDUX_STATE,
    payload: value,
  };
};
