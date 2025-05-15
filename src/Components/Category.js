import React from 'react'
import Card from './Card'

const Category = ({list}) => {
  console.log({list});
  return (
    <div className='Category'>
        <h1>Shop Now</h1>
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

export default Category