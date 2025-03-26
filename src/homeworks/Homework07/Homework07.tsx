import { v4 } from "uuid";

import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import "./style.css";

function Homework07() {
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={v4()}
        name={product.name}
        price={product.price}
      />
    );
  });

  console.log(productCards);

  return <div className="cards-wrapper">{productCards}</div>;
 
}

export default Homework07;
