import {Link} from "react-router-dom"
import "./style.css"

const HomePage = ({user}) => {


    return(
        <div className="Home">
            <h1>Welcome, {user.data.name} </h1>
            <p>Email: {user.data.email}</p>
            <p>Age: {user.data.age}</p>
            <p>Hobby: {user.data.hobby}</p>
            <p>Favorite Movie: {user.data.favoriteMovie}</p>
            <Link to="/" className="GoBack"> Go Back </Link>

        </div>
    )
}

export default HomePage