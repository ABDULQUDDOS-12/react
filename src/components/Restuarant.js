import React from 'react';
import "./style.css";
import image from "./Korma.jpg";
const myStyle={color:"red"}
const Restuarant = () => {
  return (
    <>
    <div className='card-container'>
        <div className="card">
            <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle" style={myStyle}>Breakfast</span>
            <h2 className="card-title">chicken korma</h2>
            <span className="card-description subtle">
              I love Chicken korma and this is my favourite dish 
              amongst alls so if i can choose many so i will choose Chicken
              korma, karahi, kheer, shwarma
            </span>
            <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className='card-media'/>
        </div>
    </div>
    </>
  )
}

export default Restuarant