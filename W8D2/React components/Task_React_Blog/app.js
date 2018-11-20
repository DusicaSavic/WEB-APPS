const Header = () => {
    return (
        <div className='header'>
            <h1>My React Blog</h1>
        </div>
    );
};


const PostItem = (props) => {
    return (
        <div className='post'>
            <h2 className='title'>{props.title}</h2>
            <p className='intro'>{props.body}</p>
        </div>
    )
}

const PostList = (props) => {

    const postList = props.listOfPosts.map((post) => {
        return <PostItem title={post.title} body={post.body} />
    });

    return (
        <div className='container'>
            {postList}
        </div>

    )
};

const App = () => {
    return (
        <div>
            <Header />
            <PostList listOfPosts={postData} />
        </div>
    )
}


const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);