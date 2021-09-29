import { INCREMENT } from "./type";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default countReducer;
