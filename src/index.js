import React from 'react';
import ReactDOM from 'react-dom';
import './tools/Css Designs/index.css';
import App from './tools/General Components/App';
import reportWebVitals from './reportWebVitals';
import Shop from './tools/Shop Components/shop';
import About from './tools/General Components/about';
import Navigation from './tools/General Components/NavBar'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Switch from "react-switch";
import LoginForm from "./tools/General Components/LoginForm";
import users from "./tools/Data/users.json";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import Contact from './tools/General Components/contact';
import Home from "./tools/General Components/home";
import Artworks from './tools/Shop Components/artworks';
import Icons from './tools/Shop Components/icons';
import Workshops from './tools/Shop Components/workshops';
import {Admin, Resource, fetchUtils} from "react-admin";
import './tools/Css Designs/LoginUI.css'
import './tools/Css Designs/Home.css'
import './tools/Css Designs/Shop.css'
import './tools/Css Designs/Products.css'
const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path ="/admin" component={App}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </Router>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
