import { v4 } from "uuid";

import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import "./style.css";
import { Product } from "./types";


function Homework07() {
  const productCards = products.map((product: Product) => {
    return (
      <ProductCard
        key={v4()}
        productName={product.name}
        productPrice={product.price}
      />
    )
  })

  return (
    <div className="cards-wrapper">
      <h1>Products</h1>
      {productCards}
    </div>
  )
}
 
export default Homework07;
