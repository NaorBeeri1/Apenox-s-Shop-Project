import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import MyOrdersSender from '../User UI Components/MyOrdersSender';
import useLocalStorage from '../../hooks/uselocalstorage';
import data from '../Data/workshopdata';
import Product from '../User UI Components/Product';

function Basket(props) {
  // const {orderedproducts} = data;
  // const [ordereditems, setOrderedItems] = useLocalStorage('OrderedItems',[])
  // const onCheckout = (orderedproduct) => {
  //   const exist = cartItems.find((x) => x.id === orderedproduct.id);
  //   if(exist) {
  //     setOrderedItems(
  //       ordereditems.map((x) => x.id === orderedproduct.id ? { ...exist, qty: exist.qty + 1} : x)
  //     );
  //   } else {
  //     setOrderedItems([...cartItems, {...orderedproduct, qty: 1}]);
  //   } 
  // };
    const removeQ=()=>{
        toast("Quentity Has Decreased",{
          className:"custom-toast",
          draggable:true,
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
      const addQ=()=>{
        toast("Quentity Has Increased",{
          className:"custom-toast",
          draggable:true,
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
    const {cartItems , onAdd , onRemove} = props;
    const itemsPrice = cartItems?.reduce((a,c) => a + c.price * c.qty, 0)
    const totalPrice = itemsPrice;
  return (
    <div className='block-col-1'>
        <ToastContainer draggable={false} transition={Zoom} autoClose={4000} limit={3}/>
        <h2>Cart Items</h2>
        <div>{cartItems?.length === 0 && <div>Cart Is Empty</div>}</div>
        <div></div>{cartItems?.map((item) => (
            <div key={item.id} className="roww">
                <img className='small1' src={item.image} alt={item.name}></img>
                <div>{item.name}</div>
                <div>
                    <button onClick={() => {onAdd(item); {addQ()}}} className="add">+</button>
                    <button onClick={() => {onRemove(item); {removeQ()}}} className="remove">-</button>
                </div>
                <div>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems?.length !== 0 && (
            <>
            <hr></hr>
            <div className='row12'>
                <div className='col-2'><strong>Total Price:${totalPrice?.toFixed(2)}</strong></div>
            </div>
            <div className='buttonnrow'>
                <button onClick={() => alert('Item Purchased Successfuly')} style={{background: "transparent", color:"#f2f2f2", border:"0px"}}>Checkout</button>
                
                 {/* <MyOrdersSender orderedproducts={orderedproducts} onCheckout={onCheckout}></MyOrdersSender> */}
            </div>
            </>
        )}
    </div>
  )
}

export default Basket