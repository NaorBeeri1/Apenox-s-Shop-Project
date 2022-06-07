import React from 'react'
import { useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from 'react-toastify';

export default function Product(props) {

  const addToCartSuccess=()=>{
    toast("Item Has Been Added To Cart Successfully!",{
      className:"custom-toast",
      draggable:true,
      position: toast.POSITION.BOTTOM_LEFT
    })
  }
  const [popup, setPopUp] = useState(false)
  const togglePopUp = () => {
      setPopUp(!popup)
  }
    const {product , onAdd} = props;
  return (
    <div className='prdctlist'>
      <img className='small' src={product.image} alt={product.name}></img>
      <button onClick={togglePopUp} className='btn-popup'>
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000}
      limit={3}/>
        {product.name}
        <div>${product.price}</div>
        </button>
        {popup && (<div className='popup'>
                <div className='overlay'></div>
                <div className='popup-content1'>
                    <h2>{product.infoheader}</h2>
                    <p>{product.info}</p>
                    <button onClick={togglePopUp} className='close-popup'>Close</button>
                </div>
            </div>)}
        <div className='atcbtn'>
            <button className='atcbtn1' onClick={() => {onAdd(product); {addToCartSuccess()}}}>Add To Cart</button>
        </div>
    </div>
  )
}
