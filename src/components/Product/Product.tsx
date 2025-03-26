import { ProductCardProps } from "./types";
import "./style.css";

function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="product-card-container">
      <h2>{name}</h2>
      <div>{price}</div>
    </div>
  );
}

export default ProductCard;
