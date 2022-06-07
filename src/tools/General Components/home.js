//imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
//
function Home() {
  return (
    <>
    <div className='homeinfo'>
      <h1>Hello and welcome to Apenox's artworks shop!</h1>
      <p>Here i show my arts and let you get more information about it!</p>
      <p>To get started click at any of your likings above in the navigation bar!</p>
    </div>
    <Footer />

    </>
  );
}
export default Home;