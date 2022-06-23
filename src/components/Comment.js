import React from 'react'
import profilePic from '../img/profile1.png'
const Comment = () => {
    return (
        <section className="comment">
            <img src={profilePic} alt="Profile picture"></img>
            <p>This is nice.</p>
        </section>
    )
}

export default Comment