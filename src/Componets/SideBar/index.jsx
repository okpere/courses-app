import React from 'react'
import "./index.css"
import Buttons from '../Buttons'

const SideBar = (props) => {
  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
             <h1>CloudLetHR</h1>
            <p>Industry tested no1 ssoftware solution for mordern human resourse providers over the world </p>
        </div>
        <div className='sidebar-med' >
   <        p className='waha'>Paying</p>
            <h1>N 40,000 NGN</h1>
            <p className='work'>for 300 employees</p>
        </div>
        <div>
        <div class="arrow-up"></div>
        <Buttons
        className ='sidebar-button'
        name = {"make payment"}
        />
        </div>
        
        
    </div>
  )
}

export default SideBar