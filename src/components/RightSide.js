import React from 'react'
import Refresh_icon from '../icons/refresh_icon.png';
import List_icon from '../icons/list_icon.png';
import Setting from '../icons/setting_icon.png';
import  Apps_icon from '../icons/apps_icon.png';
import  User_icon from '../icons/user_icon.png';
import './right.css'
const RightSide = () => {
  return (
    <div>
      <div className='right'>
                <button>
                    <img src={require('../icons/refresh_icon.png')}  className='icons' alt='refersh'></img>

                </button>
                <button>
                    <img src={List_icon}  className='icons' alt='list'></img>
                </button>
                <button>
                    <img src={Setting}  className='icons' alt='setting'></img>
                </button>
                <button>
                    <img src={Apps_icon}  className='icons' alt='app'></img>
                </button>
                <button>
                    <img src={User_icon}  className='icons' alt='user'></img>
                </button>
            </div>
    </div>
  )
}

export default RightSide
