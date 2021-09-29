import * as types from "../types";

const initialState = {
  value: "",
};

const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VALUE_TO_REDUX_STATE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default valueReducer;
