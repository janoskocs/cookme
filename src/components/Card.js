import React from 'react'

import Engagement from './Engagement'

import Comments from './Comments'
import UserImg from './UserImg'
import UserNameImg from './UserNameImg'
import AddComment from './AddComment'
const Card = (post) => {
    return (
        <section className="card">
            <section className="cardtop">
                <UserNameImg />
                <p>User posted this at 12pm.</p>
            </section>
            <UserImg />
            <Engagement />
            <Comments />
            <AddComment />
        </section>
    )
}

export default Card