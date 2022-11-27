import React, { useState } from 'react'

export const Products = ({products}) => {
const [count, setCount] = useState(0)


  return (
    <div>
        <div className=" grid grid-cols-4 gap-1 content-start bg-gray-300">
          {products.map((product) => (
            <div key={product._id} className="w-48 m-2 bg-orange-100 shadow-sm border-2 rounded border-red-100">
              <img src={product.image} className="w-full h-24" alt={product.name} />
              <div className="data p-4">
                <div className="title">{product.title}</div>
                <div className="weight">weight: {product.weight} gr.</div>
                <div className="category">category: {product.cotegory}</div>
                <div className="status">status: {product.status}</div>
                <div className="price">price: {product.price}</div>
                <div className="flex justify-center">
                  <button className="bg-green-400 w-8 hover:bg-green-500">+</button>
                  <div className="count px-3">{count}</div>
                  <button className="bg-green-400 w-8 hover:bg-green-500">-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
