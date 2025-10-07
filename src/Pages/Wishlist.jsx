import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setWishList(saveList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-dsc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    const updatedList = existingList.filter((p) => p.id != id);
    setWishList(updatedList);
  };
  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Wishlists <br />
          <span className="text-sm text-gray-700">
            ({wishlist.length} Products Found)
          </span>
        </h2>
        <label className="form-control  max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="price-asc">Low-&gt; High</option>
            <option value="price-dsc">High-&gt; Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-5">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow-sm border items-center p-5"
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.category}</p>
              <p>{p.price}$</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
