import React from 'react'
// import Feed from "../Profile/pages/components/feed/Feed"
// import Rightbar from '../components/rightbar/Rightbar'
// import Sidebar from '../components/Sidebar/Sidebar'
// import Topbar from '../components/Topbar'
// import "./Home.css"
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


const Profile = () => {
    return (
        <>
            <Topbar />

            <div className='profile'>
                <Sidebar />
            </div>
                <div className='profileRight'>
                    {/* <div className='profileRightTop'>asass</div> */}
                    <div className='profileRightBottom' style={{display:"flex"}}>
                    <Feed /> <Rightbar />
                    
                    </div>
                </div>
               
            
        </>
    )
}

export default Profile