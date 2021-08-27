import React from "react";
import { ProductType } from "../types";
import "./styles/ProductListItem.scss";

type ProductListItemProps = {
  product: ProductType;
};

export const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  return (
    <div className="product-list-item">
      <img
        className="product-preview"
        src={props.product.image}
        alt={"product"}
      />
      <div className="product-metadata">
        <div className="title">{props.product.title}</div>
        <div>
          <span className="price">{`$${props.product.price}`}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
