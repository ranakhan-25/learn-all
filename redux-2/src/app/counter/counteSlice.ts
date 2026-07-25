import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  count:number
}

const initialState:State = {
  count:0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state:State) => {
      state.count++;
    },
    decrement: (state:State) => {
      state.count--;
    },
    incrementByFive: (state:State,action:PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    reset: (state:State) => {
      state.count = 0;
    },
  }
})

export const { increment, decrement, reset, incrementByFive } = counterSlice.actions;

export default counterSlice.reducer;