import React from "react";
import Product from "./Product";
import { Link } from "react-router";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <div className="flex justify-between py-5">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link className="btn btn-outline" to="/products">
          See All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
