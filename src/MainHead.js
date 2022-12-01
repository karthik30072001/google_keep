import React from 'react'
import Drawer from './components/Drawer'
import LeftSide from './components/LeftSide'
import SearchBox from './components/SearchBox'
import RightSide from './components/RightSide'
const MainHead = () => {
  return (
    <div className='header'>
        <Drawer/> 
        <LeftSide className='leftside'/>
        <SearchBox/>
        <RightSide/>
  </div>
  )
}

export default MainHead
