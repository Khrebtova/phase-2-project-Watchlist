import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/User'

const Header = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
    const handleClick = () =>{
        setIsLoggedIn(!isLoggedIn)
        navigate("/")
    }

    const loggedInLinks =()=>{
        return(
            <nav className='navbar'>
                <Link to="/"> Home</Link>
                <Link to="/watchlist">All Watchlist</Link>
                <Link to="/watchlist/movies">Movies</Link>
                <Link to="/watchlist/tvseries">TV Series</Link>
                <button className="login" onClick={handleClick}> Logout</button>           
            </nav>
        )
    }
    const loggedOutLinks =()=>{
        return(
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <button className="login" onClick={handleClick}> Login</button>
            </nav>
        )
    }

    
    return (
    <header>
        {isLoggedIn ? loggedInLinks() : loggedOutLinks() }
        {isLoggedIn? <h1>Welcome to Your Personal Watchlist</h1> : <h1>Are You Ready To Create Your Personal Watchlist?</h1>}
    </header>

    )
}

export default Header