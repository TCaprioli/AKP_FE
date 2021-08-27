import React from "react";
import { ProductList } from "../products/components/ProductList";
import { ProductSelectors } from "../products/selectors";
import { useAppSelector } from "../store";
import { Header } from "./Header";
import { useAppLoad } from "./hooks/useAppLoad";
import "./App.scss";

export const App = () => {
  useAppLoad();
  const allProducts = useAppSelector(ProductSelectors.getAllProducts);
  return (
    <main className="app">
      <Header />
      <ProductList products={allProducts} />
    </main>
  );
};
