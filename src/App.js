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
  const[fsize,setfsize]=useState('50px');
  const[tcolor,setcolor]=useState('blue');
  const[bgcolor,setbgcolor]= useState("#fff");
  function newStyle(){
    updateStyle({
      title : "Rakesh Kumar Jain",
      color : "blue",
      fontSize : 40+"px"
    });
  }

  function getColor(e){
    let value= e.target.value;
    setcolor(value);
  }

  
 
  function getValue(e){
    let value=e.target.value+'px';
    console.log(value);
    setfsize(value);
  }

  function BgRed(){
    setbgcolor('red');
  }
  function BgYellow(){
    setbgcolor("yellow");
  }
  function BgBlue(){
    setbgcolor("blue");
  }
  function BgGreen(){
    setbgcolor("green");
  }

  function BgColor(e){
    let value= e.target.value;
    setbgcolor(value);
  }
  return (
    <div style={{background:bgcolor}}>
      <div style={{alignItems:'center', textAlign:'center'}}>
          <h1>{change}</h1>
          <button onClick={()=>update("Programming Site")}>Click Me</button>
      <br/><hr/>
      </div>
      <div style={{alignItems:'center',textAlign:'center'}}>
          <h1>Counter</h1>
          <h2>Value : {count} </h2>
          <button onClick={()=>setCount(count-1)}>Subtract</button>
          <button onClick={()=>setCount(count+1)}>Add</button>
      </div>
          <hr/>
      <div style={{alignItems:'center',textAlign:'center'}}>
          <h1>Style Changer</h1>
          <h2 style={{color:sty.color,fontSize:sty.fontSize}}>{sty.title}</h2>
          <button onClick={newStyle}>Change Style</button>
      </div>
          <hr/>
      <div style={{alignItems:'center',textAlign:'center'}}>
          <h1 style={{textAlign:'center'}}>Change FontSize</h1>
          <h2 style={{fontSize:fsize,color:tcolor}} >Rakesh Kumar Jain</h2>
          <label>Change Font Size:</label>
          <input type='range' name='range' step={5} onChange={getValue}/><span>{fsize}</span><br/>
          <label>Change Text Color:</label>
          <input type='color' name='color' onChange={getColor} />
      </div>
      <hr/>
      
      <h1 style={{textAlign:'center',textAlign:'center'}}>Change BG Color </h1>
      <div style={{alignItems:'center',display:'flex', justifyContent:'space-evenly'}}>
          <button onClick={BgRed} style={{background:'red', color:'#fff', padding:"20px", border:"2px solid #fff"}}>Red</button>
          <button onClick={BgYellow} style={{background:'yellow', color:'#000', padding:"20px", border:"2px solid #fff"}}>Yellow</button>
          <button onClick={BgBlue} style={{background:'blue', color:'#fff', padding:"20px", border:"2px solid #fff"}}>Blue</button>
          <button onClick={BgGreen} style={{background:'green', color:'#fff', padding:"20px", border:"2px solid #fff"}}>Green</button>
         <span>Select BG Color</span> <input type='color' onChange={BgColor}/>
      </div>
      <hr/>
      
    </div>
  )
}

export default App