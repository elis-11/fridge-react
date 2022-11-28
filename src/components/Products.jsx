import React, { useState } from "react";

// export const Products = ({ title, price, image, category, status, weight }) => {
export const Products = ({ product }) => {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);
  };
  const removeProduct = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="w-48 m-2 bg-orange-100 shadow-lg border-2 rounded border-red-100">
        <img src={product.imageUrl} className="w-full h-24" alt={product.title} />
        <div className="data p-4">
          <div className="title font-bold">{product.title}</div>
          <div className="weight">weight: {product.weight} gr.</div>
          <div className="category">category: {product.category}</div>
          <div className="status">status: {product.status}</div>
          <div className="volume">volume: {product.volume}</div>
          <div className="price">price: {product.price}</div>
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
