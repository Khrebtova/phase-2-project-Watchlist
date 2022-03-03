import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/User'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
    const handleClick = () =>{
        setIsLoggedIn(!isLoggedIn)
    }

    const loggedInLinks =()=>{
        return(
            <nav className='navbar'>
                <Link to="/" > Home</Link>
                <Link to="/watchlist">Watchlist</Link>
                <Link to="/watchlist/new" >Add to your watchlist</Link>            
                <a href='#' onClick={handleClick}>Logout</a>
            </nav>
        )
    }
    const loggedOutLinks =()=>{
        return(
            <nav className='navbar'>
                <Link to="/" > Home</Link>                        
                <a href='#' onClick={handleClick}>Login</a>
            </nav>
        )
    }

    
    return (
    <header>
        <h1>Your Personal Watchlist</h1>
        {isLoggedIn ? loggedInLinks() : loggedOutLinks() }
    </header>

    )
}

export default Header