import React, { useState } from 'react'

function App() {
  const [color,setcolor]=useState("white")
  return (
    <div>
      <h1>color-picker</h1>
      <button onClick={()=>setcolor("red")}>red</button>
      <button onClick={()=>setcolor("blue")}>blue</button>
      <button onClick={()=>setcolor("green")}>green</button>
      <div style={{height:"100px",width:"200px",border:"1px solid",marginLeft:"220px",marginTop:"20px",backgroundColor:color}}></div>
    </div>
  )
}

export default App