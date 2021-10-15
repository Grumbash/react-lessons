import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  dog: null,
  googleUser: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDog: (state, action) => {
      state.dog = action.payload;
    },
    setGoogleUser: (state, action) => {
      state.googleUser = action.payload;
    },
  },
});
const {
  actions: { setUser, setDog, setGoogleUser },
  reducer,
} = counterSlice;

export { setUser, setDog, setGoogleUser };

export default reducer;
