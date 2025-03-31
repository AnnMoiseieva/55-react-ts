import { ProductCardProps } from "./types";
import "./styles.css";

function ProductCard({ productName, productPrice }: ProductCardProps) {
  return (
    <div className="product-card-container">
      <div>Product: {productName}</div>
      <div>Price: {productPrice}</div>
    </div>
  );
}

export default ProductCard;
