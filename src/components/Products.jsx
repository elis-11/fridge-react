import React, { useState } from "react";

export const Products = ({ title, price, image, category, status, weight }) => {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);
  };
  const removeProduct = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="w-48 m-2 bg-orange-100 shadow-sm border-2 rounded border-red-100">
        <img src={image} className="w-full h-24" alt={title} />
        <div className="data p-4">
          <div className="title">{title}</div>
          <div className="weight">weight: {weight} gr.</div>
          <div className="category">category: {category}</div>
          <div className="status">status: {status}</div>
          <div className="price">price: {price}</div>
          <div className="flex justify-center">
            <button
              onClick={addProduct}
              className="bg-green-300 w-8 hover:bg-green-500"
            >
              +
            </button>
            <div className="count px-3">{count}</div>
            <button
              onClick={removeProduct}
              className="bg-green-300 w-8 hover:bg-green-500"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
