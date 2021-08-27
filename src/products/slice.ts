import { createSlice } from "@reduxjs/toolkit";
import { productCaseReducers } from "./reducers";
import { fetchProducts } from "./thunks";
import { ProductType } from "./types";

const productSliceName = "Products";

export enum AsyncRequestStatus {
  pending = "pending",
  fulfilled = "fulfilled",
  rejected = "rejected",
}

export type ProductState = {
  productData: Array<ProductType>;
  status: AsyncRequestStatus | null;
};

const initialState: ProductState = { productData: [], status: null };

export const ProductSlice = createSlice({
  name: productSliceName,
  initialState: initialState,
  reducers: {
    ...productCaseReducers,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = AsyncRequestStatus.pending;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.status = AsyncRequestStatus.fulfilled;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.error);
        state.status = AsyncRequestStatus.rejected;
      });
  },
});
