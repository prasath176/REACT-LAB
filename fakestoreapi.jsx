import React ,{useEffect,useState} from 'react'

function Fakestoreapi() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/1")
    .then(res=>res.json())            
    .then((data)=>setProducts(data))
  },[])
  return (
    <div style={Styles.Card}>
      <img src={products.image} alt="" style={Styles.img} />
      <h4>{products.title}</h4>
      <p><b>Price:</b>{products.price}</p>
      <p><b>Description:</b>{products.description}</p>
      <p><b>Category:</b>{products.category}</p>
    </div>
  )
}
const Styles={
Card:{
  width:"300px",
  border:"1px solid white",
  padding:"15px",
  borderRadius:"8px",
  margin:"20px auto"
},
img:{
  width:"100px",
  height:"200px",
  objectFit:"contain"
}
}


export default Fakestoreapi