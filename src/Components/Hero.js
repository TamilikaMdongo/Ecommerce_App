import React, {useState} from 'react'
import './styles.css';
import Iphone from './assets/Adobe Express - file (3).png'


import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'


const Hero = () => {

    


  return (
    <div className='Hero'>
      <div className='hero-text'>
        <h1>Experience Innovation in Your Hands</h1>
        <p>Discover the latest iPhone with cutting-edge technology, sleek design,<br></br> and unmatched performance. </p>
      </div>
       <div className='hero-image'>
        <img src={Iphone}/>
       </div>
    </div>
  )
}

export default Hero