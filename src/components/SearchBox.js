import React from 'react'
import './searchbox.css'
const SearchBox = () => {
  return (
    <div>
      <form className='searchBox'>     
            <input type='text' className='searchfiled' placeholder='Search'></input>
      </form>
    </div>
  )
}

export default SearchBox
