import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchedProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-xl md:text-3xl font-bold">
          All Products <br />
          <span className="text-sm text-gray-700">
            ({searchedProducts.length} Products Found)
          </span>
        </h2>
        <label className="search flex items-center justify-center border rounded">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
            className="p-1 text-center"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
