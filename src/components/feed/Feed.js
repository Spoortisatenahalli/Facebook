import Post from '../Post/Post'
import Share from '../share/Share'
import React from './Feed.css'
import {Posts} from "./../../Dummydata.js"

export default function Feed() {
  // console.log("postdata" ,Posts);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((item)=>(
            <Post key={item.id} post={item}/>
       ))}
      
      </div>

    </div>
  )
}
