import React, {useState} from 'react'
import './styles.css';



import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'


const Hero = ({data}) => {

    const [dataItems, setSlide] =useState(0);

    const nextSlide = () =>{
      setSlide(dataItems+1)
    }

    const prevSlide = () =>{
      setSlide(dataItems+2)
    }


  return (
    <div className='Hero'>

        <h1>Weekly Specials</h1>
      
        
        <div className='Container'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
        
        {data?.map((items, i)=>{
      return <img src={items.image} key={i} className= { dataItems ===i ? 'Slide':" Slide slide-hidden"}/>
      })}
       
       <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>

   
      
        
        </div>
       
        <p >Lorem ipsum dolgdvfor sit amet, consectetur adipiscing elit. <br/>Suspendisse eleifend bibendum tellus in interdum.<br/> Praesent euismod ligula non consectetur pharetra.<br/> Sed tincidunt vehicula mauris, vel tincidunt lorem iaculis a.</p>
        <button>Browse Now</button>
    </div>
  )
}

export default Hero