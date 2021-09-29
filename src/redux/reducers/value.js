import { SET_VALUE_TO_REDUX_STATE } from "../type";

const initialState = {
  value: "",
};

const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_TO_REDUX_STATE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default valueReducer;
