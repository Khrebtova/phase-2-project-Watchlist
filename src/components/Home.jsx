import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/User'

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
    const navigate = useNavigate()
    const handleClick =(e)=>{
        console.log("go to ", e.target.name)
        if(e.target.name === "watchlist"){
            navigate(`/${e.target.name}`)
        }else{
            navigate(`/watchlist/${e.target.name}`)
        }        
    }
    
    const loggedInLinks =() =>{
        return(
            <div className='home'>
                <h2>What are you looking for?</h2>
                <button className="navigateBtn" name="watchlist" onClick={handleClick}>Show my whole watchlist</button>
                <button className="navigateBtn" name="movies" onClick={handleClick}>Looking for movies</button>
                <button className="navigateBtn" name="tvseries" onClick={handleClick}>Looking for TV series</button>
            </div>
        )
    }

    return (
        <div>
            {isLoggedIn ? loggedInLinks() : <h2> Login to see your watchlist!</h2>}
        </div>
    )
}

export default Home