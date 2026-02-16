import React, { useState } from 'react'
function tabcomponent(){
    const [activeTab,setactiveTab]=useState("Home")
    return(
        <div style={StyleSheet.container}>
            <h1>Hi! Tab-component </h1>
            <div style={StyleSheet.tabcontainer}>
                <button onClick={()=> setactiveTab("Home")}>Home</button>
                <button onClick={()=> setactiveTab("About")}>About</button>
              <button onClick={()=> setactiveTab("contact")}>contact</button>

            </div>
            <div style={StyleSheet.Contentbox}>
                

            </div>
        </div>
    )
}
const Style={
    container:{
        minHeight:"100px",
        padding:"20px",
        border:"1px solid"
    },
    tabcontainer:{
        padding:"20px",
         border:" none",
         margin:"20px",

    },
    contentBox:{
        height:"100px",
        width:"300px",
        marginleft:"300px",
        background:"lightblue",
        paddingtop:"10px",
    },
}
export default tabcomponent