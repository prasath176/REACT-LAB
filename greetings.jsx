import React, { useEffect, useState } from 'react'

function Greeting() {
    const [Greeting,setGreeting]=useState("")
    useEffect(()=>{
    const hours=new Date().getHours().toString().padStart(2,'0')
    const minutes=new Date().getMinutes().toString().padStart(2,'0')
    const seconds=new Date().getSeconds().toString().padStart(2,'0')
    if(hours<12){
        setGreeting(`GOOD MORNING ${hours}:${minutes}:${seconds} `)
    }
    else if(hours>=12 && hours<=17){
        setGreeting(`GOOD AFTERNOON ${hours}:${minutes}:${seconds} `)

    }
    else if(hours>=17 && hours<=19){
        setGreeting(`GOOD ENENING ${hours}:${minutes}:${seconds} `)

    }

    })
  return (
    <div>
        {Greeting}
    </div>
  )
}

export default Greeting