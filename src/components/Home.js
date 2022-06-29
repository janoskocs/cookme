import { useState, useEffect } from "react"
import Hero from "./Hero"
import useFetch from "./useFetch"
import BlogList from "./BlogList"
const Home = () => {

    //const { data: blogs, isPending, error } = useFetch('https://janoskocs.com/db/db.json') FETCH BLOGS

    const [blogs, setBlogs] = useState([
        {
            title: "Pasta",
            body: "Add water in a pot, add oil, add salt. Wait until water boils and add pasta. Cook for 8 minutes.",
            author: "Mr Pasta",
            likes: 1,
            id: 0
        },
        {
            title: "Eggs",
            body: "Boil water, then add eggs.",
            author: "Mr Egg",
            likes: 1,
            id: 1
        }
    ])

    const updateLikes = (post) => {

    }
    //Destructure the returned values from useFetch. Also, call data as blogs in this context
    return (
        <div className="content">
            <Hero />
            {//FETCH: If returns error show it error && <div>{error}</div>}
                //FETCH: If fetch is pending return loading isPending && <div>Loading... </div> /*if isPending is true (state) then show loading. The state is updated in useEffect after receiving the data from the server.*/}
                /*Check if blogs is true and not null, then render blogs, otherwise if it's false it will not output bloglist component */
            }
            <BlogList blogs={blogs} />
        </div>
    )
}

export default Home