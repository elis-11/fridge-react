import React, { useState } from "react";

export const Header = ({products}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ["vegetable", "fruit", "berry", "cheese"];
  
    const activeCategory = (index) => {
      setActiveIndex(index);
    };
  
  return (
    <div className="header flex justify-between">
      <div className="categories flex m-5">
        {categories.map((value, index) => (
          <div
            key={value}
            onClick={() => activeCategory(index)}
            className={`${
              activeIndex === index ? "active" : ""
            } bg-orange-300 hover:bg-orange-500 active:bg-orange-400 text-white p-3 m-3 rounded-2xl opacity-50 cursor-pointer`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="sort m-5">sort</div>
    </div>
  );
};
