import React from 'react'
import './styles.css'

const Card = (props) => {
  return (
    <div className='productCard'>
     
       <img src={props.image}/>
       <div className='card-info'>
         <p  >{props.title}</p>
       <p>{props.price}</p>
       <button>Add to cart</button>
       </div>
      
    </div>
  )
}

export default Card