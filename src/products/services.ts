import axios from "axios";
import { API_URL } from "..";
import { isProduct } from "./types";

const productParam = "/products";
export const ProductApi = () => {
  const fetchAll = async () => {
    try {
      const response = await axios.get(`${API_URL + productParam}`);
      const products = response.data;
      if (!Array.isArray(products)) {
        throw new Error("invalid product");
      }
      products.forEach((product) => {
        if (product.hasOwnProperty("_id")) {
          product.productId = product._id;
          delete product._id;
        }
      });

      if (products.every(isProduct)) {
        return products;
      } else throw new Error("invalid product");
    } catch {
      throw new Error("failed to fetch");
    }
  };

  return { fetchAll };
};
