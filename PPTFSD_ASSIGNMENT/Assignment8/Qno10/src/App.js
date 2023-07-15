import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [items, setItems] = useState();
  function networkCall(){
    const url=`https://fakestoreapi.com/products`;
    axios.get(url).then((response)=>{
      console.log(response.data);
      setItems(response.data)
    }).catch((error)=>{alert("error")})
  }
  useEffect(()=>{networkCall()},[]);
  return (
    <>
    <nav className="flex justify-center items-center h-24 w-full bg-black text-white
    font-extrabold text-6xl">
      All Products
    </nav>
    <div className="bg-gray-600 flex flex-wrap w-screen justify-center gap-10">
      {items?.map((item,index)=>{
        return(
          <div key={index} className="flex flex-col items-center justify-center bg-black text-white w-3/12 border boder-2 border-black rounded-md p-4 mt-2">
            <img src={item?.image} width={150} height={150} alt="product"/>
            <h2>{item?.title}</h2>
            <h3 className="flex justify-center">price: {item?.price}</h3>
            <div><button className="text-black h-10 w-24 bg-slate-100 border-none rounded-3xl mx-1">Add to Cart</button>
            <button className="text-black h-10 w-24 bg-slate-100 border-none rounded-3xl mx-1">Buy Now</button>
            </div>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
