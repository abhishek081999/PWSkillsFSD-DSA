import axios from "axios";
import { useState } from "react";
function App() {
  const [searchString, setSearchString] = useState();
  const [user, setUser] = useState();
  function networkCall(){
    const url=`https://api.github.com/users/${searchString}`;
    axios.get(url).then((response)=>{
      console.log(response.data);
      setUser(response.data)
    }).catch((error)=>{alert("error")})
  }
  return (
    <div className="w-screen bg-black/70">
      <div className="flex justify-center pt-20 w-screen">
        <h1 className="border border-2 border-white rounded-md h-16 w-42 py-4 px-2 font-extrabold text-white text-3xl underline">GitHub User Find</h1>
      </div>
      <div className="flex gap-10 justify-center mt-12">
        <div className="bg-blue-800  w-2/6">
          <div className="bg-white py-4">
            <input 
            placeHolder="Enter User Name"
            className="border border-2 border-black mx-4" defaultValue={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <button onClick={networkCall} className="px-20 py-2 border-none rounded-lg bg-blue-900 text-white">Get Data</button>
          </div>
        </div>
        <div className="bg-blue-800 h-11/12 w-2/6">
          <div className="bg-white py-4">
            <input 
            placeHolder="Enter User Name"
            className="border border-2 border-black mx-4" defaultValue={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <button onClick={networkCall} className="px-20 py-2 border-none rounded-lg bg-blue-900 text-white">Get Data</button>
          </div>
            {user!== undefined?
            <>
              <img src={user?.avatar_url} height={150} width={150} alt="avatar" className="mx-44 mt-2 rounded-2xl"/>

              <div className="flex flex-wrap w-full h-fit p-8 justify-center">
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Name: </div>
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Portfolio: <span className="text-blue-800 underline italic text-sm">portfolio</span></div>
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Location: {user.location} </div>
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Public Repos:{user?.public_repos}</div>
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Followers:{user?.followers}</div>
                <div className="bg-blue-600 w-2/6 h-fit p-4 m-2">Bio:{user?.bio?.substring(1, 40)}</div>
                
              </div>
            </>
            :<>Loading.......</>}
        </div>
      </div>
    </div>
  );
}

export default App;
