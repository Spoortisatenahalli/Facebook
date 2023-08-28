import React from './Rightbar.css'
import {Users} from "../../Dummydata"

export default function Rightbar() {
  console.log("Userdetails" , Users);
  return (
    <div className='rightBar'>
      <div className='rightbarWrapper'>
          <div className='birthdayContainer'>
             <img className="birthdayImg" src="/Assets/gift.avif" alt=""/>
             <span className='birthdayText'>
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
             </span>
          </div>
          <img className='rightbarAd' src="/Assets/Post/ad.png" alt=""/>
          <h4>Online Friends</h4>
          <ul className='rightbarFriendList'>
              <li className='rightBarFriend'>
              {Users.map((item)=>{
                    console.log("itemdetails" , item);
                     return <div className='rightbarProfileImgContainer'>
                   <img className='rightbarprofileImg' src={item.profilePicture}/>
                   <span className='rightbarUsername'>{item.username}
                 </span>
                  <span className='rightbarOnline'></span>
                </div>
                  })}
              </li>

           
              

          </ul>
      </div>
    </div>
  )
}
