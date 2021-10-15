import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1; // -> {type: "counter/increment", payload: {{{{}}}} }
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
const {
  actions: { increment, decrement, incrementByAmount },
  reducer,
} = counterSlice;

export { increment, decrement, incrementByAmount };

export default reducer;
