import { Products } from "./components/Products";
import productsJson from "./assets/products.json";
import { useState } from "react";
console.log(productsJson);

function App() {
  const [products, setProducts] = useState(productsJson);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["vegetable", "fruit", "berry", "cheese"];
  const activeCategory = (index) => {
    setActiveIndex(index);
  };

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

  const updateProductPrice = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id
        ? { ...product, price: Number((product.price + 1).toFixed(2)) }
        : product
    );
    setProducts(productsUpdate);
  };

  // Total Products
  const totalProducts = products.length;
  // const productsInFridge =

  // Total Price
  const totalPrice = products.reduce((total, item) => total + item.price, 0);

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

  //! Fridge Price
  const fridgePrice = products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  // Products in Fridge
  // const productsInFridge = products.filter((product) => product.count > 0 ? product.name : product
  //   );

  // Fridge Volume
  const fridgeVolume = products.reduce((total, item) => {
    return total + item.volume * item.count;
  }, 0);

  return (
    <div className="collumn items-center">
      <div className="flex  items-center justify-center font-bold text-4xl text-orange-300 mx-auto my-3">
        <h2 className="">Fridge App</h2>
      </div>
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
      <div className="flex flex-row justify-between ">
        <div className=" basis-3/4 grid grid-cols-4 gap-1 content-start bg-orange-50">
          {products.map((product) => (
            <Products
              key={product._id}
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
              updateProductPrice={updateProductPrice}
            />
          ))}
        </div>

        <div className="cart basis-1/4 flex flex-col bg-orange-100">
          {/* Total Products */}
          <div className="tota-products border-4 border-rose-50 p-5">
            <div className="total flex justify-center mt-6 text-orange-500 font-bold">
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
              Cheapest Product: {cheapestPrice.title} costs:{" "}
              {cheapestPrice.price}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {totalPrice.toFixed(2)}
            </div>
          </div>
          {/* Products in Fridge */}
          <div className="products-in-fridge border-4 border-rose-50 p-5 mt-5">
            <div className="flex justify-center mt-2 text-orange-500 font-bold ">
              Products in fridge : 
              {/* {productsInFridge} */}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {fridgePrice.toFixed(2)}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Fridge volume: {fridgeVolume.toFixed(0)} from 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
