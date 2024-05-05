import React from 'react'
import { Bs0Circle, BsBasket, BsCart, BsMoon, BsPerson, BsTruck } from 'react-icons/bs'

const Nav
 = () => {
  return (
    <div>
      <div className=''>

      </div>
        <nav>
         
            <ul>
              <li className='Shop'> Shop</li>
                <li>Home</li>
                <li>Shop</li>
                <li>Stores</li>
                <li>Sales</li>
            </ul>
        </nav>
        <div className='Nav-items'>
          <ul>
            <li> <BsCart/> </li>
            <li> <BsPerson/> </li>
            <li> <BsTruck/> </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Nav
