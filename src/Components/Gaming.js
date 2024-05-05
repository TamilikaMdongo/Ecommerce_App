import React from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill, BsXbox} from 'react-icons/bs'

const Gaming = () => {
    const xBox = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfyN2FtDFpraSxhGOz1Eijo0c3ZDOIspi8Q&s'
  return (
    <div className='gaming-container'>
        <BsXbox className='xbox'/>
        <h1>Gaming specials</h1>
        <img src={xBox}/>
        <button>Browse</button>
    </div>
  )
}

export default Gaming