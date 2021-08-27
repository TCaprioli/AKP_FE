import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "./services";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await ProductApi().fetchAll();
    return products;
  }
);
