import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface Product {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Products {
  isLoading: boolean;
  products:Product[] ;
  error: string | boolean | undefined | null
}

const initialState:Products = {
  isLoading: true,
  products: [],
  error:false,
}

export const getProduct = createAsyncThunk("products/product", async()=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  return res.json()
})
export const getSingleProduct = createAsyncThunk("products/product", async(id)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  return res.json()
})


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      })
  },
});

export default productSlice.reducer