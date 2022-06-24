import { useState, useEffect } from "react"
import BlogList from "./BlogList"
const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {// can't use async here
        fetch('http://localhost:8000/blogs').then(response => {
            return response.json() //THis parses the response to javascript object. Because this is asynchronous, it will return another promise.
        }).then(data => { //Need another .then to get the actual data from the response above
            //This data contains the actual data
            console.log(data)
            setBlogs(data)//Update blog state with data received
        })
    }, []) //Pass empty array as 2nd argument to run useEffect once when components render


    return (
        <div className="content">
            {/*Check if blogs is true and not null, then render blogs, otherwise if it's false it will not output bloglist component */blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    )
}

export default Home