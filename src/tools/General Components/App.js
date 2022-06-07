import React from "react";
import Shop from "../Shop Components/shop";
import About from "./about";
import Navigation from "./NavBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import users from "../Data/users.json";
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./contact";
import Home from "./home";
import Artworks from "../Shop Components/artworks";
import Icons from "../Shop Components/icons";
import Workshops from "../Shop Components/workshops";
import AdminNavigation from "../Admin UI Components/AdminNavBar";
import Orders from "../Admin UI Components/userOrders";
import ShoppingCart from "../Shop Components/shoppingcart";
import {useEffect} from "react";  
import {Helmet} from "react-helmet";
import useLocalStorage from "../../hooks/uselocalstorage";
import Footer from "./Footer";
import MyOrders from "../User UI Components/myorders";

function App() {
  const [user, setUser] = useLocalStorage('userlogged',{ name: "", email: "", password: ""})
  const [error, setError] = useState("");
  const UserLogin = (details) => {
    for (let index = 0; index < users.length; index++) {
      const u = users[index];
      if (
        details.name === u.name &&
        details.email === u.email &&
        details.password === u.password 
      )
      {
        setUser({
          name: details.name,
          email: details.email,
          password: details.password,
          isAdmin: users[index].isAdmin,
          image: users[index].image
        });
      }
     
    }
    setError("details do not match");
  };
  
  const LogoutInfo = (something) => {
    let temp = user;
    if(temp !== undefined || temp !== null){
      delete temp.password
    }
    
    setUser({
      user:"",
      name: "",
      email: "",
      password: ""
    });
  };
useEffect(() => {
  if(user.name !== undefined && user.name !== null && user.email !== undefined && user.email !== null && user.password !== undefined && user.password !== null) {
    console.log(user)
    delete user.password;
  }
},[user]);

  return (   
    
    <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Apenox's Art Shop</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Apenox's Art Shop" />
            </Helmet>
      {user.email !== "" ? (
        <div>
          {console.log(user.isAdmin)}
          <BrowserRouter>
            {user.isAdmin ? <AdminNavigation /> : <Navigation />}
            <Routes>
              <Route path="/" element={<Navigate to="/home"/>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/myorders" element={<MyOrders/>}/>
              <Route path="shop" element={<Shop />} >
              <Route path="artworks" element={<Artworks />} />
              <Route path="workshops" element={<Workshops />} />
              <Route path="icons" element={<Icons />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <div className="somethingtocheck">
            {users &&
              users.map((userr) => {
                return (
                  <div className="somethingtocheck22" key={userr.id}></div>
                );
              })}
          </div>
          <h2 className="header2">
            Welcome, <span id="username1">{user.name}</span>
            <span>{user.image}</span>
          </h2>
          <button className="lob" onClick={LogoutInfo}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={UserLogin} error={error} />
      )}
    </div>
  );
}
  
export default App;