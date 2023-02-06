import {useState} from 'react'
import '../styles/ReadMoreReadLess.css'
const ReadMoreReadLess=({children})=> {
    const [isReadMoreShown,setReadMoreShown]=useState(false)
    const toggleBtn=()=>{
          setReadMoreShown(prevState=>!prevState)
    }
  return (
    <div className='read-more-read-less'>
        {isReadMoreShown ? children :children.substr(0,100)}
        <button className='morebutton' onClick={toggleBtn}>{isReadMoreShown ? ' less' : '...more'}</button>
    </div>
  )
}

export default ReadMoreReadLess