import { SET_USER, SET_DOG } from "../types";

const initialState = {
  user: null,
  dog: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    case SET_DOG:
      return { ...state, dog: payload };

    default:
      return state;
  }
};

export default userReducer;
