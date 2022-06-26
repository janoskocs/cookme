import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubtmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true) //Create a blog object from the states
        fetch('http://localhost:8000/blogs', { //Pass in the url, 2nd argument is an object
            method: 'POST',//Specift method
            headers: { "Content-Type": "application/json" },//Specify what you are sending to the server which is json
            body: JSON.stringify(blog)//The actual object that we are sending, but first we need to convert it to a json string
        }).then(() => {
            console.log('new blog added.')//Once it is completes, returns a promise
            setIsPending(false)
            navigate('/')//Once new blog is added, redirect to home page
        })
    }

    return (
        <div className="create-blog">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubtmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author} onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
    )
}

export default Create