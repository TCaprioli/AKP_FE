import { useEffect } from "react";
import { ProductSelectors } from "../../products/selectors";
import { fetchProducts } from "../../products/thunks";
import { useAppDispatch, useAppSelector } from "../../store";

export const useAppLoad = () => {
  const dispatch = useAppDispatch();
  const productStatus = useAppSelector(ProductSelectors.getProductsStatus);
  useEffect(() => {
    const fetchInitialProducts = async () => {
      if (productStatus === null) {
        try {
          await dispatch(fetchProducts());
        } catch (err) {
          alert(err);
        }
      }
    };
    fetchInitialProducts();
  }, [dispatch, productStatus]);
};
