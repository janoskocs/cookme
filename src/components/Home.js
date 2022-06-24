import { useState, useEffect } from "react"
import useFetch from "./useFetch"
import BlogList from "./BlogList"
const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    //Destructure the returned values from useFetch. Also, call data as blogs in this context
    return (
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... </div> /*if isPending is true (state) then show loading. The state is updated in useEffect after receiving the data from the server.*/}
            {/*Check if blogs is true and not null, then render blogs, otherwise if it's false it will not output bloglist component */
                blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    )
}

export default Home