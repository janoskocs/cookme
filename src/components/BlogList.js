import { Link } from 'react-router-dom'
const BlogList = ({ blogs }) => {


    return (
        <div id="recipe-list">
            <h2 className="section-title">Check out our latest selection of great dishes</h2>
            <p className="section-description">Community selected recipes will let you explore exotic tastes and connect with different cultures accross the world.</p>
            {blogs.map((blog) => (
                <div className="recipe-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> {/* Create link dynamically based on the current blog that's clicked on*/}
                        <h2> {blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                </div>
            ))
            }
        </div>
    )
}

export default BlogList