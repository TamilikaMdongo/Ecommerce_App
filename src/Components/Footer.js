import React from 'react'

import { Bs0CircleFill, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>

    <div className='icons'>
    <ul>
        <li> <BsInstagram/> </li>
        <li><BsTwitter/></li>
        <li><BsLinkedin/></li>
        <li><BsGithub/></li>
        <li><BsFacebook/></li>
    </ul>
    </div>
       
    <div>
        <h1>Shop</h1>
        <p> Created by Tamilika Mdongo @2024</p>
    </div>
    <div className='links-list'>
        <ul>
            <li className='Links'>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    </div>

    <div className='about'>
        <ul>
            <li className='about-link'>About</li>
            <li>Legal</li>
            <li>Policy</li>
            <li>FAQ</li>
        </ul>
    </div>
    <div className='FAQ'>
        <ul>
            <li className='FAQ-link'>FAQ</li>
            <li>Legal</li>
            <li>Policy</li>
            <li>FAQ</li>
        </ul>
    </div>
  

</div>
  )
}

export default Footer

/*
 
    */