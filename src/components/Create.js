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
        <div id="create-blog">
            <h2 className="section-title">Check out our latest selection of great dishes</h2>
            <p className="section-description">Community selected recipes will let you explore exotic tastes and connect with different cultures accross the world.</p>
            <form onSubmit={handleSubtmit}>
                <label>Recipe name:</label>
                <input
                    className="input-name-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe steps</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>May I take your name?</label>
                <input
                    className="input-name-title"
                    type="text"
                    required
                    value={author} onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Share recipe</button>}
                {isPending && <button disabled>Share recipe</button>}
            </form>
        </div>
    )
}

export default Create