
import { createSlice } from "@reduxjs/toolkit"

export interface Books {
  books: { title: string, price: number }[]
}
const initialState:Books = {
  books: [
  ]
}
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBooks: (state, action) => {
      const title = action.payload;
      state.books = state.books.filter(book => book.title !== title)
    }
  }
})

export const { addBooks,deleteBooks } = bookSlice.actions;
export default bookSlice.reducer;