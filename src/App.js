import React from 'react'
import { useState } from 'react'

function App() {
  const stylechange = {
      title : "Rakesh Kumar Jain",
      color : "Red",
      fontSize : 21+"px"
  }



  const [change,update] =useState("CNC Web World");
  const[count,setCount] =useState(5);
  const[sty,updateStyle]=useState(stylechange);

  function newStyle(){
    updateStyle({
      title : "Rakesh Kumar Jain",
      color : "blue",
      fontSize : 40+"px"
    });
  }

  return (
    <>
      <h1>{change}</h1>
      <button onClick={()=>update("Programming Site")}>Click Me</button>
      <br/><hr/>
 
      <h1>Counter</h1>
      <h2>Value : {count} </h2>
      <button onClick={()=>setCount(count-1)}>Subtract</button>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <br/><hr/>
      <h1>Style Changer</h1>
      <h2 style={{color:sty.color,fontSize:sty.fontSize}}>{sty.title}</h2>
      <button onClick={newStyle}>Change Style</button>
      <hr/>
    </>
  )
}

export default App