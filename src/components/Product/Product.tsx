import { ProductCardProps } from "./types";
import "./styles.css";
import { useEffect } from "react";

function ProductCard({ productName, productPrice }: ProductCardProps) {
  //Unmounting - выполняем действие при размонтировании компонента Product
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div className="product-card-container">
      <div>Product: {productName}</div>
      <div>Price: {productPrice}</div>
    </div>
  );
}

export default ProductCard;
