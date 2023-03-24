import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
const Restuarant = () => {
  //usestate hooks
  //array of two variable 1st state variable, used for data management
  //if we want to use a component many times then we need props
  const [menuData,setmenuData] = useState(Menu)
return (
    <>
      {/* we use props after menucard */}
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restuarant