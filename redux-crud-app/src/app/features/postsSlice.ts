import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
} 


interface InitialType{
  isLoading: boolean;
  posts: Post[];
  error: string | null | undefined
}



const initialState:InitialType = {
    isLoading: false,
    posts: [],
    error:null
}
  
export const fetchPosts = createAsyncThunk<Post[]>("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data
})


export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true
    });
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message ?? "Something went wrong";
    });
  }
})

export default postSlice.reducer