import React from 'react'
import profilePic from '../img/profile1.png'
const UserNameImg = () => {
    return (
        <>
            <img src={profilePic} alt="Profile picture"></img>
            <p>Welcome, User</p>
        </>
    )
}

export default UserNameImg