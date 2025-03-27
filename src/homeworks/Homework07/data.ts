import { Product } from "./types";


export const products: Product[] = [
  {
    name: "Apple",
    price: 1.5,
  },
  {
    name: "Banana",
    price: 1.0,
  },
  {
    name: "Orange",
    price: 2.0,
  },
  // {
  //   name: "Grape",
  //   price: 2.0,
  //   count: 32,
  // },
];

products.push({name: "Grape",
    price: 2.0,
    count: 32,})
