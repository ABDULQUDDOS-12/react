import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import menuCard from './menuCard';
const Restuarant = () => {
  //usestate hooks
  //array of two variable 1st state variable, used for data management
  const [menuData,setmenuData] = useState(Menu)
  return (
    <>
      <menuCard/>
    </>
  )
}

export default Restuarant