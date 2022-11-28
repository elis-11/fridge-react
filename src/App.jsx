import { Products } from "./components/Products";
import productsJson from "./assets/products.json";
import { useMemo, useState } from "react";
console.log(productsJson);

function App() {
  const [products, setProducts] = useState(productsJson);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const categories = ["vegetable", "fruit", "berry", "cheese"];
  // const activeCategory = (index) => {
  //   setActiveIndex(index);
  // };

  const addProduct = (_id) => {
    const productsUpdate = products.map((product) =>
      product._id === _id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(productsUpdate);
  };
  const removeProduct = (_id) => {
    const productsUpdate = products.map((product) =>
      product._id === _id && product.count
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(productsUpdate);
  };

  // Total Products
  const totalProducts = products.length;

  // Total Price
  const totalPrice = products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  // const productsMemo = useMemo(() => {
  //   const sum = products.reduce((total, item) => total + item.price, 0);
  //   return sum;
  // }, [products]);
  // console.log(productsMemo);

  // Total Volume
  const totalVolume = products.reduce((total, item) => {
    return total + item.volume;
  }, 0);

  // Expensive
  const expensivePrice = products.reduce((total, item) => {
    return total.price > item.price ? total : item;
  });

  // Cheapest
  const cheapestPrice = products.reduce((total, item) => {
    return total.price < item.price ? total : item;
  });

  return (
    <div className="collumn items-center">
      <div className="flex  items-center font-bold mx-auto my-3">
        <h2 className="">Fridge App</h2>
      </div>
      {/* <div className="categories flex m-5">
        {categories.map((value, index) => (
          <div 
          // key={categories.length}
            onClick={() => activeCategory(index)}
            className={activeIndex === index ? "active" : "" } className="bg-gray-300 text-white p-3 m-3 rounded-2xl opacity-50 cursor-pointer"
          >
            {value}
          </div>
        ))}
      </div> */}
      <div className="flex flex-row justify-between ">
        <div className=" basis-3/4 grid grid-cols-4 gap-1 content-start bg-orange-50">
          {products.map((product) => (
            // product.count >= 0 &&
            <Products
              key={product._id}
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          ))}
        </div>

        {/* <div className="cart flex justify-center bg-slate-400"> */}
        <div className="cart basis-1/4 flex flex-col bg-orange-100">
          <div className="total flex justify-center mt-6 font-bold">
            Total Products: {totalProducts}
          </div>
          <div className="total flex justify-center mt-6 font-bold">
            Total volume: {totalVolume} from 100
          </div>
          <div className="expensive flex justify-center mt-6 font-bold">
            Expensive Product: {expensivePrice.title} costs:{" "}
            {expensivePrice.price}
          </div>
          <div className="cheapest flex justify-center mt-6 font-bold">
            Cheapest Product: {cheapestPrice.title} costs: {cheapestPrice.price}
          </div>
          <div className="total flex justify-center mt-6 font-bold">
            Total price: {totalPrice.toFixed(2)}
            {/* Total price: {productsMemo.toFixed(2)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
