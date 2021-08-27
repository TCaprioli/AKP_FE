export type ProductType = {
  productId: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

export const isProduct = (product: any): product is ProductType => {
  return (
    !!product.productId &&
    typeof product.productId === "string" &&
    !!product.title &&
    typeof product.title === "string" &&
    !!product.description &&
    typeof product.description === "string" &&
    !!product.image &&
    typeof product.image === "string" &&
    !!product.price &&
    typeof product.price === "number"
  );
};
