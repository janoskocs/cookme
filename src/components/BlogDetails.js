import useFetch from './useFetch';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const BlogDetails = () => {

    const { id } = useParams();// get the id param from router
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)//reuse custom hook to fetch blogpost
    const navigate = useNavigate()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE' // Ask server to delete this 
        }).then(() => {
            navigate('/') //After deletion, return user to the home page
        })
    }
    return (
        <div className="blog-details">
            <h2 className="section-title">Mmmmm, delicious...</h2>
            <p className="section-description">There was a lot of love out in to this recipe, make sure you finish it with the chef's kiss.</p>
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article id="recipe">
                    <h2>{blog.title}</h2>
                    <p className="author">Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails