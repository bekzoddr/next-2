import ProductWrapper from "@/components/productWrapper/ProductWrapper";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Products = async () => {
  let data = await getData();
  return (
    <div>
      <ProductWrapper data={data} />
    </div>
  );
};

export default Products;
