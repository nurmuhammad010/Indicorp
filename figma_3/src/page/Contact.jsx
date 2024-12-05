import React from 'react'
import kino from  "../page/kino.jsx"
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
  
          <div style={{display:"flex",gap:"10px",padding:"50px"}}>
      {kino.map(e =>(
        <Link to={`/Productet/${e.id}`} state={{ fullInfo: { ...e}}} style= {{width: "calc(100% / 4 -20px)",background:"blue"}} className="card">

      <h1>{e.name}</h1>
      <img src={e.image} alt="" />      
        </Link>
      
      ))}
    </div>
   
  )
}
