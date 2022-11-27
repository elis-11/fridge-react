import { Products } from "./components/Products";
import products from "./assets/products.json";
console.log(products);

function App() {

  return (
    <div className="collumn items-center">
      <div className="flex  items-center font-bold mx-auto my-3">
        <h2 className="">Fridge App</h2>
      </div>
      <div className="flex justify-between ">
        <div className=" grid grid-cols-4 gap-1 content-start bg-gray-300">
          {products.map((product) => (
            <Products
              key={product._id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          ))}
        </div>

        {/* <div className="cart flex justify-center bg-slate-400"> */}
        <div className="cart grid content-start bg-slate-400">
          <div className="total">Total</div>
        </div>
      </div>
    </div>
  );
}

export default App;
