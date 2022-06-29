import useFetch from './useFetch';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const BlogDetails = ({ blog }) => {
    const location = useLocation();
    const { from } = location.state
    const { id } = useParams();// get the id param from router
    //const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const [likes, setLikes] = useState(from.likes);
    const [likeStatus, setLikeStatus] = useState(false)


    // const handleClick = () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //         method: 'DELETE' // Ask server to delete this 
    //     }).then(() => {
    //         navigate('/') //After deletion, return user to the home page
    //     })
    // }



    const handleLike = () => {
        const likes = from.likes + 1;
        const title = from.title
        const body = from.body
        const author = from.author
        const id = from.id
        const newBlog = { title, body, author, likes, id }
        console.log(newBlog)
        setLikes(likes)
        setLikeStatus(true);
        // console.log(updatedBlog)
        // fetch('http://localhost:8000/blogs/' + blog.id, { //Pass in the url, 2nd argument is an object
        //     method: 'PUT',//Specift method
        //     headers: { "Content-Type": "application/json" },//Specify what you are sending to the server which is json
        //     body: JSON.stringify({ title, body, author, likes })//The actual object that we are sending, but first we need to convert it to a json string
        // })
    }
    console.log()
    return (
        <div className="blog-details">
            <h2 className="section-title">Mmmmm, delicious...</h2>
            <p className="section-description">There was a lot of love put into this recipe, make sure you finish it with the chef's kiss.</p>
            {/* {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}   */}

            <article id="recipe">
                <h2>{from.title}</h2>
                <p className="author">Written by {from.author}</p>
                <p>{from.body}</p>
                <p>This recipe received {likes} likes.</p>
                {/* {false && <button onClick={handleClick}>Delete</button>} */}
                {!likeStatus && <button onClick={handleLike}>Like</button>}
                {likeStatus && <button disabled onClick={handleLike}>Thanks for liking!</button>}
            </article>

        </div>
    )
}

export default BlogDetails