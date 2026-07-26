import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./app/features/bookSlice"

export const store = configureStore({
  reducer: {
     booksR:BooksReducer,
   }
 })
