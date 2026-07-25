import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./app/counter/counteSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
