const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

export default countReducer;
