import React from 'react'
import Card from './Card'

const Feed = ({ postsData }) => {

    //Loop through users
    //If users have posts then push users object through to the card by the amount of posts
    const usersWithPosts = postsData.filter((user) => {
        return user.posts.length > 0
    })
    const posts = usersWithPosts.map((post) => {
        return post.posts;
    })


    return (
        <section id="feed">

            {/* {posts.map((post) => (
                <Card key={post.postId} post={post} />
            ))} */}

        </section>
    )
}

export default Feed