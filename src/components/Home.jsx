import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';

const Home = () => {
    const [isLoggedIn] = useContext(UserContext)
    
    const navigate = useNavigate()   
    
    const handleClick =(e)=>{        
        navigate(`/${e.target.name}`)       
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

    const loggedOutPage =()=>{
        return (
            <div className='home'>
                <h2> Login to get started!</h2>                
            </div>
        )
    }

    return (
        <div>
            {isLoggedIn ? loggedInLinks() : loggedOutPage() }
        </div>
    )
}

export default Home