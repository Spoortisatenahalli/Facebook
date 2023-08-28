import React from 'react'
import "./Sidebar.css"

import { RssFeed, Chat, Group, Bookmark } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className='sideBar'>
            <div className='sideWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>

                    </li>

                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chats</span>

                    </li>

                    <li className='sidebarListItem'>
                        < Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>Videos</span>

                    </li>

                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon' />
                        <span className='sidebarListItemText'>Groups</span>

                    </li>

                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'>Bookmarks</span>

                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'>Questions</span>

                    </li>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Jobs</span>

                    </li>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Events</span>

                    </li>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Courses</span>

                    </li>

                </ul>

                <button className='sidebarButton'> Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li><li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src="/Assets/data.jpg" alt="" />

                        <span className='sidebarFriendName'>Jane Doe</span>

                    </li>

                </ul>
            </div>

        </div>
    )
}
