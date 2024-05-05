import React from 'react'

const Category = () => {
  return (
    <div className='Category'>
        <h1>Category</h1>
       
        <ul>
           
            <li> <div className='cell'>
                Cell
                <button className='btn'> Browse now</button>
                </div> 
                 </li>
            <li>  <div className='laptops'> laptops <button className='btn1'>Browse now</button> </div>  </li>
            <li>   <div className='consoles'>Consoles <button className='btn2'>Browse now</button></div> </li>
            <li>  <div className='accessories'>accessories <button className='btn3'>Browse now</button></div> </li>
        </ul>
    </div>
  )
}

export default Category