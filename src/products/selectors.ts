import { RootState } from "../store";

export const ProductSelectors = {
  getProductsStatus: (state: RootState) => state.Products.status,
  getAllProducts: (state: RootState) => state.Products.productData,
};
