//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Artworks from "./artworks";
import SearchBar from "./SearchBar";
import ProductData from "../Data/Data.json"
import PopUp from "../General Components/PopUp";
import Footer from "../General Components/Footer";


function Shop() {
  return (
    <>
    <div className="shopping">
      <nav className="navigation2">
        <NavLink to="/shop/artworks" element={<Artworks />}>
          Artworks
        </NavLink>
        <NavLink to="/shop/workshops">Workshops</NavLink>
        <NavLink to="/shop/icons">Logos</NavLink>
      </nav>
      <Outlet />
      </div>  
      <div className="mainsearchwrapper">
      <body>  
    <SearchBar placeholder="Enter a product name.." data={ProductData}/>    
      </body>
      </div>
      <Footer />
      </>
  );
  
}
export default Shop;
