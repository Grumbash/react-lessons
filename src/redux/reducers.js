import { INCREMENT, DECREMENT, SET_VALUE_TO_REDUX_STATE } from "./type";

const initialState = {
  count: 0,
  value: "",
};

const countReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE_TO_REDUX_STATE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default countReducer;
