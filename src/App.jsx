import { Products } from "./components/Products";
import products from "./assets/products.json";
console.log(products);

function App() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const categories = ["vegetable", "fruit", "berry", "cheese"];
  // const activeCategory = (index) => {
  //   setActiveIndex(index);
  // };

  // Total
  const totalPrice = products.reduce((total, item) => {
    return total + item.price;
  }, 0);

  

  // Expensive
  const expensivePrice = products.reduce((total, item) => {
    return total.price > item.price ? total : item;
  });
  console.log(expensivePrice);

  // Cheapest
  const cheapestPrice = products.reduce((total, item) => {
    return total.price < item.price ? total : item;
  });
  console.log(cheapestPrice);

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
            <Products
              key={product._id}
              product={product}
            />
          ))}
        </div>

        {/* <div className="cart flex justify-center bg-slate-400"> */}
        <div className="cart basis-1/4 flex flex-col bg-orange-100">
          <div className="total flex justify-center mt-6 font-bold">Total price: {totalPrice.toFixed(2)}</div>
          {/* <div className="expensive">{expensivePrice}</div> */}
          {/* <div className="cheapest">{cheapestPrice}</div>  */}
        </div>
      </div>
    </div>
  );
}

export default App;
