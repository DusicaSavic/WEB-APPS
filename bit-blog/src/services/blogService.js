import Post from '../entities/Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchPostData = () => {
    return fetch(`${BASE_URL}/posts`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            const postArray = result.slice(0, 4);

            const ourPosts = postArray.map((post) => {
                const { userId, id, title, body } = post;

                return new Post(userId, id, title, body);
            });

            console.log(ourPosts);
            return ourPosts;
        });
}

const fetchSinglePostData = (postId) => {
    return fetch(`${BASE_URL}/posts/${postId}`)
        .then((response) => {
            return response.json();
        })
}




export {
    fetchPostData,
    fetchSinglePostData

}