
import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import React from 'react'



import Products from './Components/products'
import productList from './Components/productList';
import Gaming from './Components/Gaming';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Search from './Components/Search';
import list from './Components/list';
import Partners from './Components/Partners';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Search/>
    <Hero/>
   <Products list = {productList}/>
   <Gaming/>
   <Category list = {list}/>
   <Partners/>
   <Footer/>
      
      
    </div>
  )
}

export default App;
