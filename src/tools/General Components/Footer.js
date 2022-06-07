
import React from "react";
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Apenox's Art Shop</h4>
            <h1 className="list-unstyled">
              <li>123-456-789</li>
              <li>Tel Aviv, Israel</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Information</h4>
            <ui className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/">Home</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/about">About</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/contact">Contact us</NavLink></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Products</h4>
            <ui className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/shop/artworks">Artworks</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/shop/workshops">Workshops</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/shop/icons">Logos</NavLink></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Apenox's Art Shop | All rights reserved | <NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/about">About</NavLink> | <NavLink style={{textDecoration:"none", color:"#f2f2f2"}} to="/contact">Contact us</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}