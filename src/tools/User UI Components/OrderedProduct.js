import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from 'react-toastify';

export default function OrderedProduct(props){
    const {orderedproduct, onCheckout} = props;
return(
    <div className="prdctlist">
        <img className='small' src={orderedproduct.image} alt={orderedproduct.name}></img>
        <span>{orderedproduct.name}${orderedproduct.price}</span>
        <div>
            <button onClick={()=>{onCheckout(orderedproduct)}}>Checkout</button>
        </div>
    </div>
)
}