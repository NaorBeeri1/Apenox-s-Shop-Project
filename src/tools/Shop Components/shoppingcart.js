//imports
import React from 'react';
import Basket from './Basket';
import data from '../Data/data';
import useLocalStorage from '../../hooks/uselocalstorage';
import Footer from '../General Components/Footer';
import MyOrdersSender from '../User UI Components/MyOrdersSender';
//

function ShoppingCart() {
  const {orderedproducts} = data;
  const [ordereditems, setOrderedItems] = useLocalStorage('OrderedItems',[])
  const onCheckout = (orderedproduct) => {
    const exist = cartItems.find((x) => x.id === orderedproduct.id);
    if(exist) {
      setOrderedItems(
        ordereditems.map((x) => x.id === orderedproduct.id ? { ...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setOrderedItems([...cartItems, {...orderedproduct, qty: 1}]);
    } 
  };
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
        <div className="rowww">
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
           <MyOrdersSender orderedproducts={orderedproducts} onCheckout={onCheckout}></MyOrdersSender>
          {/* <Footer /> */}
        {/* </div> */}
      </div>
      </div>
    );
  }
export default ShoppingCart;