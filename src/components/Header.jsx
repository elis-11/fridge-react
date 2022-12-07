import { useState } from "react";

export const Header = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["vegetable", "fruit", "berry", "cheese"];
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ["popular", "price", "alphabet"];

  const onClickListItem = (i) => {
    setSelected(i)       // select one item
    setIsVisible(false)  // & hide popup
  }

  const activeCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="header flex justify-between h-50">
      <div className="categories flex ">
        {categories.map((value, index) => (
          <div
            key={index}
            onClick={() => activeCategory(index)}
            className={`${
              activeIndex === index ? "active" : ""
            } bg-orange-300 hover:bg-orange-500 active:bg-orange-400 text-white p-4 m-2 h-12  rounded-2xl opacity-50 cursor-pointer`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="sort m-5 w-30">
        <div className="sort_label">
          <b>Sort by:</b>
          <span
            onClick={() => setIsVisible(!isVisible)}
            className="ml-2 border-dotted border-orange-500 border-b-4 text-orange-500 cursor-pointer"
          >
            {list[selected]}
          </span>
        </div>
        {isVisible && (
          <div className="sort_popup mt-3  ">
            {list.map((item, i) => (
              <div
              key={i}
              onClick={() => onClickListItem(i)}
                className={`${
                  selected === i ? "active:" : ""
                } p-1 pl-3 my-0.5 w-40 bg-orange-50 font-bold border-b-2 hover:bg-orange-100 cursor-pointer`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
