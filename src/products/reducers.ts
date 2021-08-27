import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./slice";
import { ProductType } from "./types";

type ProductCaseReducers = {
  updateProduct: CaseReducer<ProductState, PayloadAction<ProductType>>;
};

export const productCaseReducers: ProductCaseReducers = {
  updateProduct: (state, action) => {
    const productData = action.payload;
    const targetIndex = state.productData.findIndex(
      (product) => product === productData
    );
    if (targetIndex !== -1) state.productData[targetIndex] = productData;
  },
};
