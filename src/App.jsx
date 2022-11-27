import { useState } from "react";
import { Products } from "./components/Products";

function App() {
  const [products, setProducts] = useState([
    { _id: "p1", title: "Apple", weight: "1000", cotegory: "fruit", status: "1", price: 8.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    // { _id: "p2", title: "Strawberry", weight: "300", cotegory: "fruit", status: "1", price: 5.99, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { _id: "p2", title: "Strawberry", weight: "300", cotegory: "fruit", status: "1", price: 5.99, image: "https://media.istockphoto.com/id/820833558/photo/still-life-from-farm-products-light-breakfast-with-fresh-strawberries-cottage-cheese.jpg?s=170667a&w=0&k=20&c=vzDxkuXn_1NvPbm1l9K_JrOlyg9hRUkYH0BkWYxJgEE=" },
    { _id: "p3", title: "Peach", weight: "500", cotegory: "fruit", status: "2", price: 5.99, image: "https://media.istockphoto.com/id/1258476858/photo/fresh-juicy-peach-with-green-leaves-isolated-on-a-pink-background.jpg?s=170667a&w=0&k=20&c=0l9NhJiLMIIOfYgO63vtn3RNYvxA_E0RE00zPiulcQ8=" },
    { _id: "p4", title: "Figs", weight: "300", cotegory: "fruit", status: "1", price: 8.99, image: "https://images.unsplash.com/photo-1601379760883-1bb497c558f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p5", title: "Cherry", weight: "500", cotegory: "fruit", status: "2", price: 5.99, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p6", title: "Mango", weight: "400", cotegory: "fruit", status: "1", price: 8.99, image: "https://images.unsplash.com/photo-1587486936739-78df7470c7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxmcnVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p7", title: "Kiwi", weight: "1000", cotegory: "fruit", status: "2", price: .49, image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p8", title: "Ananas", weight: "1200", cotegory: "fruit", status: "2", price: 4.49, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { _id: "p9", title: "Avokado", weight: "200", cotegory: "vegetable", status: "1", price: 1.79, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    // { _id: "p10", title: "Raspberry", weight: "250", cotegory: "fruit", status: "1", price: 3.99, image: "https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p10", title: "Raspberry", weight: "250", cotegory: "fruit", status: "1", price: 3.99, image: "https://media.istockphoto.com/id/464943588/photo/fresh-raspberries-in-a-bowl.jpg?s=170667a&w=0&k=20&c=ccqzYwMJP44FewhhBzmg5SkUraYujWnMB_BBm0mlml8=" },
    { _id: "p11", title: "Pear", weight: "1000", cotegory: "fruit", status: "2", price: 4.49, image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { _id: "p12", title: "Pomegranate", weight: "500", cotegory: "fruit", status: "2", price: 4.49, image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  ]);


  return (
    <div className="collumn items-center"> 
      <div className="flex  items-center font-bold mx-auto my-3">
        <h2 className="">Fridge App</h2>
      </div>
      <div className="flex justify-between ">
        <Products products={products}/>
        {/* <div className="cart flex justify-center bg-slate-400"> */}
        <div className="cart grid content-start bg-slate-400">
          <div className="total">Total</div>
        </div>
      </div>
    </div>
  );
}

export default App;
