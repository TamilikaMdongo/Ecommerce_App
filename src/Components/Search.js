import React from 'react'
import { FaSearch} from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search'>
      <div className='search-bar'> 
        <FaSearch className='search-icon'/>
        <input type='text' placeholder='Search'></input>
      </div>
    </div>
  )
}

export default Search
