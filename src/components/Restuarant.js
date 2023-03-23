import React from 'react'
import "./style.css"
const myStyle={color:"red"}
const Restuarant = () => {
  return (
    <>
    <div className='card-container'>
        <div className="card">
            <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle" style={myStyle}>Breakfast</span>

            </div>
        </div>
    </div>
    </>
  )
}

export default Restuarant