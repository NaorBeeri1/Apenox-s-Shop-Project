import React, { Component, useState } from 'react';
import useLocalStorage from '../../hooks/uselocalstorage';
import {useEffect} from "react";
import Basket from './Basket';
import Main from './Main';
import workshopdata from '../Data/workshopdata';
import data from '../Data/data';
//
function Workshops() {
    const { workshopproducts } = data;
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
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    return (
      <div className="shoppp">
        <div className="row">
          <Main products={ workshopproducts} onAdd={onAdd}></Main>
          {/* <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket> */}
        </div>
      </div>
    );
  }
//   const {products} = workshopdata;
//   const getProductts = (params) => {
//       return JSON.parse(localStorage.getItem('Products'))?.map((cartItems) => {
//           if(cartItems.id === parseInt(params.id)) return cartItems;
//       });
//   };
//   const getCartItems = () => {
//       return JSON.parse(localStorage.getItem("cartItems"))
//   }
//   console.log(products)
//   const [cartItems, setCartItems] = useState()
//   useEffect(() => {
//       setCartItems(getCartItems())
//   }, [])   
      // const localData = localStorage.getItem('cartItems');
      // return localData ? JSON.parse(localData) : [];);
//   const onAdd = (product) => {
//       let temp = cartItems;
//       const exist = products?.find(x => x.id === product.id);
//       if(temp === undefined || temp === null){
//           temp = [];
//           temp.push(exist)
//       }
//       else{
//       temp.push(exist);

//   }
//       setCartItems(temp);
//       if(exist !== null || exist !== undefined) {
//           setCartItems(products.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x
//               )
//           );
//       }
//       else {
//           setCartItems([...cartItems, {...product, qty: 1}])
//       }
//       localStorage.setItem("cartItems", JSON.stringify(temp))
//   };
//   const onRemove = (product) => {
//       const exist = products?.find(x => x.id === product.id);
//       let temp = cartItems.filter(function (x) {
//           return x.id !== exist.id
//       });
//       localStorage.setItem("cartItems", JSON.stringify(temp));
//       return setCartItems(temp);
      // console.log(cartItems)
      // const exist = cartItems.find((x) => x.id === product.id);
      // if(exist.qty === 1) {
      //     setCartItems(cartItems.filter((x) => x.id !== product.id));
      // }
      // else{
      //     setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
      //         )
      //     );
      // }
//   }
  // useEffect(()=>{
  //     if(localStorage.getItem("cartItems") === null)
  //     localStorage.setItem('cartItems',JSON.stringify(cartItems))
  // },[cartItems]);

//   return (
//     <div className='shoppp'>
//     {/* <Header /> */}
//     <div className='mainsc'> 
//     <Main onAdd={onAdd} products={products}/>
//     {/* <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> */}
//     </div>
//     </div>
//   );
// }
export default Workshops;