import React from "react";
import { ProductType } from "../types";
import { ProductListItem } from "./ProductListItem";
import "./styles/ProductList.scss";

type ProductListProps = {
  products: ProductType[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const productsToDisplay = products.slice(0, 4);
  return (
    <div className="product-list">
      {productsToDisplay.map((product) => (
        <ProductListItem product={product} />
      ))}
    </div>
  );
};
