
import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import React from 'react'



import dataItems from './Components/heroItems'
import Products from './Components/products'
import productList from './Components/productList';
import Gaming from './Components/Gaming';
import Category from './Components/Category';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Hero data ={dataItems}/>
   <Products list = {productList}/>
   <Gaming/>
   <Category/>
   <Footer/>
      
      
    </div>
  )
}

export default App;
