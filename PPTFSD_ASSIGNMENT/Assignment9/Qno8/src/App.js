import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([])
  const [todo,setTodo] = useState();
  const [todoStatus,setTodoStatus]=useState([])
  return (

    <div class="bg-gradient-to-b from-sky-600  to-blue-950 w-screen h-screen">
      
      <div className="flex justify-center items-center w-screen pt-12">
        <div className="flex justify-center items-center bg-white h-26 rounded-xl w-auto py-6 px-4">
        <form id="myForm"> <input id="todoInput" onChange={(e)=>setTodo(e.target.value)}/></form>
        <button className="bg-blue-900 h-12 w-28 text-white rounded-xl"
        onClick={()=>{
          if(todo.length!==0){
            setTodos([...todos,todo]);
          setTodo("");
          setTodoStatus([...todoStatus,'pending']);
          document.getElementById("myForm").reset();
          }
          else{
            alert("Input Empty");
          }
        }}>Add</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center w-screen gap-4 py-6">
        {todos?.map((item,index)=>{
          return(<div key={item} className="flex flex-col py-4 px-4 w-3/12 h-fit bg-blue-950 shadow-lg capitalize rounded-2xl">
           <span className="text-white font-extrabold mb-8"> {index+1} {item}</span><br/>
           <span className="text-white font-medium ">Status: {todoStatus[index]}</span>
           <button className="my-4 w-full h-12 bg-blue-800 text-white rounded-lg">Update Status</button>
           <button className="my-4 w-full h-12 bg-blue-800 text-white rounded-lg">Remove</button>
           
          </div>)
        })}

      </div>

    </div>
  );
}

export default App;
