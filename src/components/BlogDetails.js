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
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails