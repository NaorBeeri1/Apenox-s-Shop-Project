import React from 'react'
import {useState} from 'react'
import "../Css Designs/PopUp.css"
import ProductData from '../Data/Data.json'

function PopUp() {

    const [popup, setPopUp] = useState(false)

    const togglePopUp = () => {
        setPopUp(!popup)
    }

  return (
    <> 
    <button onClick={togglePopUp} className='btn-popup'>
        Open
    </button>
    {popup && (<div className='popup'>
        <div className='overlay'></div>
        <div className='popup-content'>
            <h2>Hello popup[</h2>
            <p>dasdasjdasdsa</p>
            <button onClick={togglePopUp} className='close-popup'>Close</button>
        </div>
    </div>)}
    </>
  )
}

export default PopUp