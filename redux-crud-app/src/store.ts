import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./app/features/bookSlice"
import PostReducer from "./app/features/postsSlice";

export const store = configureStore({
  reducer: {
    booksR: BooksReducer,
    postsR:PostReducer,
   }
 })
