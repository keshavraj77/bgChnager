import { useState } from 'react';

function App() {
  const [color,setColor]=useState("olive")
  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center top-11 inset-x-0">
      <div className="fixed gap-3 flex flex-wrap justify-center bg-white rounded-xl px-3 py-2">
        <button onClick={()=>setColor("olive")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"olive"}} >
    Olive
        </button>
        <button onClick={()=>setColor("red")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"red"}} >
    Red
        </button>
        <button onClick={()=>setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"blue"}} >
    Blue
        </button>
        <button onClick={()=>setColor("green")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"green"}} >
    Green
        </button>
        <button onClick={()=>setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-black " style={{backgroundColor:"yellow"}} >
    Yellow
        </button>
        <button onClick={()=>setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"purple"}} >
    Purple
        </button>
        <button onClick={()=>setColor("orange")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Orange"}} >
    Orange
        </button>
        <button onClick={()=>setColor("lavender")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"lavender"}} >
    Lavender
        </button>
        <button onClick={()=>setColor("white")}className="outline-black outline-double px-4 py-1 rounded-full text-black " style={{backgroundColor:"white"}} >
    White
        </button>
        <button onClick={()=>setColor("black")}className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Black"}} >
    Black
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App;
