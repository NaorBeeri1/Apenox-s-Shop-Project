//imports
import React, { Component, useState } from 'react';
import useLocalStorage from '../../hooks/uselocalstorage';
import {useEffect} from "react";
import Basket from './Basket';
import Main from './Main';
import data from '../Data/data';
import {ToastContainer} from "react-toastify"

//
function ShoppingCart() {
    const { products } = data;
    const [cartItems, setCartItems] = useLocalStorage('cartItems',[]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    // const onRemove = (product) => {
    //   const exist = cartItems.find((x) => x.id === product.id);
    //   if (exist.qty === 1) {
    //     setCartItems(cartItems.filter((x) => x.id !== product.id));
    //   } else {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    //       )
    //     );
    //   }
    // };
    return (
      <div className="shoppp">
        <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
        </div>
      </div>
    );
  }
export default ShoppingCart;