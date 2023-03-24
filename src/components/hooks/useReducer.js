import React, { useReducer } from "react";
import "./style.css";
const reducer = (state,action)=>{
    if(action.type === "INCR"){
        state = state+1;
    }
    if(action.type === "DECR"){
        state = state-1;
    }
    return state;
}
const UseReducer = () => {
  // const initialData = 15;
  //first is state variable which is current data
  //second is updated function
//   const [myNum, setMyNum] = React.useState(0);
// dispatch is used for triggering the function
const intialData = 10;
const [state,dispatch]  = useReducer(reducer,intialData)
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={()=>dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;