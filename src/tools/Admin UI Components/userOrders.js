import React from 'react'
import users from "../Data/users.json";
import App from '../General Components/App';
import Footer from '../General Components/Footer';
function Orders() {
  return (
    <>
    <div className='ordersinfo'>
    <span>{users[2].name + " " + users[2].email}</span>
    <span>{users[3].name + " " + users[3].email}</span>
    <span>{users[4].name + " " + users[4].email}</span>
    
    </div>
    <Footer/>
    </>
  );
}

export default Orders