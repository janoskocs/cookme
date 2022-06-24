import React from 'react'
import profilePic from '../../img/profile1.png'
const UserNameImg = () => {
    return (
        <>
            <img src={profilePic} alt="Profile picture"></img>
            <p>Welcome,</p>
        </>
    )
}

export default UserNameImg