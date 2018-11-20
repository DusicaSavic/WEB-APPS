

const Header = () => {
    return (
        <header>
            <h1>React Users</h1>
        </header>
    )
}


const UserPhoto = () => {
    return (
        <div>
            <img src='https://randomuser.me/api/portraits/med/women/13.jpg' />
        </div>
    )
}

const UserInfo = (props) => {
    return (
        <div>
            <p>name</p>
            <p>email</p>
            <p>date of birth</p>
        </div>
    )
}
const UserItem = (props) => {
    console.log(props)
    return (
        <div>
            <UserPhoto />
            <UserInfo />
        </div>
    )
}


const UserList = (props) => {

    const userList = props.listOfUsers.map((user) => {
        return <UserItem name={user.name.first} email={user.email} dateOfBirth={(new Date(user.dob.date)).toLocaleDateString()} picture={user.picture.medium} />
    })

    return (
        <div>
            {userList};
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <p>&#169; 2018 Copyright BIT</p>
        </footer>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <UserList listOfUsers={userData.results} />
            <Footer />
        </div>
    )
}

const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);
