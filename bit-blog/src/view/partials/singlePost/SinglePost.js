import React, { Component } from 'react'
import { fetchSinglePostData } from '../services/blogService';
import { fetchUser } from '../services/blogService';
import { fetchPostsFromUser } from '../services/blogService';

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            user: {},
            userPosts: [],
        }
    }

    fetchUser(userId) {
        fetchUser(userId)
            .then()
    }

    fetchUserPosts(userId) {
        fetchPostsFromUser(userId)
            .then()
    }

    fetchPost() {
        fetchSinglePostData(this.props.match.params.id)
            .then(post => {
                this.setState({ post });

                this.fetchUser(post.userId);
                this.fetchUserPosts(post.userId);
            });
    }

    componentDidMount() {
        this.fetchPost();
    }

    render() {
        return (
            <div>
                <h3>SINGLE POST TITLE</h3>
                <a>Author Name</a>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here'.
                                </p>
                <hr />

                <ul>
                    <h3>3 more posts from same autor</h3>
                    <li><a>Title 10</a></li>
                    <li><a>Title 11</a></li>
                    <li><a>Title 12</a></li>

                </ul>
            </div >
        )


    }
}

export { SinglePost };