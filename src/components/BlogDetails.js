import useFetch from './useFetch';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const BlogDetails = () => {

    const { id } = useParams();// get the id param from router
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const [likes, setLikes] = useState(null);
    const [likeStatus, setLikeStatus] = useState(false)

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE' // Ask server to delete this 
        }).then(() => {
            navigate('/') //After deletion, return user to the home page
        })
    }

    const handleLike = () => {
        const likes = blog.likes + 1;
        const title = blog.title
        const body = blog.body
        const author = blog.author
        setLikes(1)
        setLikeStatus(true);
        // console.log(updatedBlog)
        fetch('http://localhost:8000/blogs/' + blog.id, { //Pass in the url, 2nd argument is an object
            method: 'PUT',//Specift method
            headers: { "Content-Type": "application/json" },//Specify what you are sending to the server which is json
            body: JSON.stringify({ title, body, author, likes })//The actual object that we are sending, but first we need to convert it to a json string
        })
    }

    return (
        <div className="blog-details">
            <h2 className="section-title">Mmmmm, delicious...</h2>
            <p className="section-description">There was a lot of love put into this recipe, make sure you finish it with the chef's kiss.</p>
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article id="recipe">
                    <h2>{blog.title}</h2>
                    <p className="author">Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <p>This recipe received {blog.likes + likes} likes.</p>
                    <button onClick={handleClick}>Delete</button>
                    {!likeStatus && <button onClick={handleLike}>Like</button>}
                    {likeStatus && <button disabled onClick={handleLike}>Thanks for liking!</button>}
                </article>
            )}

        </div>
    )
}

export default BlogDetails