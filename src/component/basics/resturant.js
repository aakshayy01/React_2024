import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuapi.js";
import Menucard from "./Menucard.js";
import Navbar from './navbar.js';
const uniqueList= [
  // (...) --> spread opertor  
  ...new Set(Menu.map((currelem)=>{
    return currelem.category;
})),"ALL",
];
 console.log(uniqueList);


const Resturant = () => {
      // USE STATE HOOK-->use at top level 
      const [menuData,setMenuData] =  useState(Menu);

      const[menuList,setMenuList]=useState(uniqueList);
      const filterItem = (category)=>{

        if(category==="ALL"){
          setMenuData(Menu);
          return;
        }
        const updatedlist=Menu.filter((currelem)=>{
          return currelem.category === category;
        })
        // update according to categories using hook
        setMenuData(updatedlist);
      };
     
  return (
    <>
          <Navbar filterItem={filterItem} menuList={menuList}/> 
     <Menucard menuData={menuData}/>
    </>
  )
}

export default Resturant
