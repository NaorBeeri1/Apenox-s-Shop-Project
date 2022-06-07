import { NavLink } from "react-router-dom";

export default function AdminNavigation() {
    return(
  <>
    <nav className="navigation">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="shop/artworks">Shop</NavLink>
      <NavLink to="/contact">Contact us</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/shoppingcart">Shopping Cart</NavLink>
      <NavLink to="/orders">User Orders</NavLink>
    </nav>
  </>);
}
