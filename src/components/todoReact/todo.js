import React from 'react'
import "./style.css"
const Todo = () => {
  return (
    <>
    <div className='main-div'>
        <div className="child-div">
        <figure>
            <img src="./images/todo.svg" alt="todologo" />
        <figcaption>Add your list here ✌</figcaption>
        </figure>
        <div className="addItems">
        <input type="text" name="" id="" placeholder='✍ add item' className='form-control'/>
        <FontAwesomeIcon icon="fa-solid fa-plus add-btn" />
        </div>
        </div>
    </div>
  </>
  )
}

export default Todo