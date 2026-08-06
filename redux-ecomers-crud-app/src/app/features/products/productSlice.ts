import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
}
export interface UpdateProductPayload {
  id: string;
  data: {
    title: string;
    desc: string;
    price: number;
  };
}
export interface Products {
  isLoading: boolean;
  products: Product[];
  error: string | boolean | undefined | null;
}

const initialState: Products = {
  isLoading: true,
  products: [],
  error: false,
};

export const getProduct = createAsyncThunk("products/product", async () => {
  const res = await fetch(`http://localhost:3000/products`);
  return res.json();
});
export const deleteProduct = createAsyncThunk<string, string>(
  "products/deleteProduct",
  async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    return id;
  },
);

export const updateProduct = createAsyncThunk<
  Product,
  UpdateProductPayload
>(
  "products/updateProduct",
  async ({ id, data }) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  }
);

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
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload,
        );
      });
  },
});

export default productSlice.reducer;
