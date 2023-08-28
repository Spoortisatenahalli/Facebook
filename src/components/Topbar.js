import React from 'react'
import {Search , Person ,Chat , Notifications} from '@material-ui/icons';
import "./Topbar.css"

export default function Topbar() {
  return (
    <div className='topbarContainer'> 
      <div className='topbarLeft'>
        <span className='logo'>LamaSocial</span>
        </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
            <Search className='searchIcon'/>

            <input placeholder='search for friend,post' className='searchinput'/> 

        </div>
      </div>
        <div className='topbarRight'>
          <div className='topbarLinks'>
          <span className='topbarLink'> Homepage</span>
          <span className='topbarLink'> Timeline</span>
          </div>
          <div className='topbarIcons'>

            <div className='topbarIconItem'>
                <Person/>
                <span className='topbarIconBadge'>
                    1
                </span>
            </div>

            <div className='topbarIconItem'>
                <Chat/>
                <span className='topbarIconBadge'>
                    1
                </span>
            </div>

            <div className='topbarIconItem'>
                <Notifications/>
                <span className='topbarIconBadge'>
                    1
                </span>
            </div>
          </div>
     <img src='/Assets/Person.jpg' alt='' className='topbarImg'/>
      </div>
    </div>
  )
}
