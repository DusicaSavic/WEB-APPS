import React from 'react'

import { Link } from "react-router-dom";



const BlogList = () => {
    return (
        <ul className="collection">
            <h4>POSTS</h4>
            <li className="collection-item avatar">
                <Link to="/post" className="title"><i className="material-icons">Title</i></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text.</p>
            </li>

            <li className="collection-item avatar">
                <Link to="/post" className="title"><i className="material-icons">Title</i></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text.</p>
            </li>

            <li className="collection-item avatar">
                <Link to="/post" className="title"><i className="material-icons">Title</i></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text.</p>
            </li>

            <li className="collection-item avatar">
                <Link to="/post" className="title"><i className="material-icons">Title</i></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text.</p>
            </li>
        </ul>

    )
}

export { BlogList }