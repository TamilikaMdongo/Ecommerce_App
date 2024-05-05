import React from 'react'
import Card from './Card'

const products = ({list}) => {
    console.log(list)
  return (
   
    <div>
        <div className='banner'>
        <h1>Best sellers</h1>


        </div>
        <div className='Cards'>
        {list?.map((items, i)=>{
            return <Card
             
              image = {items.image}
              title = {items.title}
              price = {items.price}
            />
        })}
        </div>

    </div>
  )
}

export default products