import { SET_VALUE_TO_REDUX_STATE } from "../types";

export const setValueToReduxState = (value) => {
  return {
    type: SET_VALUE_TO_REDUX_STATE,
    payload: value,
  };
};
