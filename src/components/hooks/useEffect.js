import React, {useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  //first is state variable which is current data
  //second is updated function
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    //   console.log("Hi")
    document.title=`chats(${myNum})`
  })
// ,[]  array dependency sirf first time run ko mention krtee hai
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
