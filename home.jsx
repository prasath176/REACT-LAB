import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
        <h3>HI,click here to go to the page:post.jsx 
            <Link to="/post">Go</Link></h3>
    </div>
  )
}

export default Home