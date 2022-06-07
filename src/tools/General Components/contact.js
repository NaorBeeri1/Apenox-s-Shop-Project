//imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
//
function Contact() {
  return (
    <>
    <div className='contactus'>
      <span>Hello and welcome! If you need any support from us or have any general questions for us, Please contact us at: ‎  
      <a style = {{color:"white"}}href="mailto:nnaaoorr0022@Gmail.com?cc=insertanotheremail@xyz.com&bcc=insertsecretemail@xyz.com&subject=Mail from xyz.com&body=Dear xyz.com" target="_blank">This Mail</a>
      </span>
    </div>
    <Footer />

    </>
  );
}
export default Contact;