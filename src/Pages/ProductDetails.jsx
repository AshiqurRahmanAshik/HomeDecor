import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import Wishlist from "./Wishlist";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => String(p.id) === id);
  if (loading) return <p>Loading...</p>;
  const { image, name, description, category, price } = product;

  const handleAddToWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("Already Added");
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold pb-5">
        Product Details
      </h2>
      <div className="card bg-base-100 border shadow-sm">
        <figure className="h-84 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="furniture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToWishList} className="btn btn-outline">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
