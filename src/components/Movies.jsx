import React from 'react';
import { useNavigate } from 'react-router-dom';
import Moviecard from './Moviecard';

const Movies = ({shows, onDeleteShow, onUpdateShow, isLoggedIn}) => {
  const navigate = useNavigate();
  const movies = shows.filter(show => show.type === "movies");
  
  const handleClick =(e)=>{        
    navigate(`/${e.target.name}`)       
  }

  const loggedInPage =()=>{
    return (
      <div>
        <button name="watchlist" onClick={handleClick}>Show my whole watchlist</button>
        <button name="tvseries" onClick={handleClick}>Show TV series</button>
        <ul className='cards'>
            {movies.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)}
        </ul>
      </div>
    )
  }
    
  return (
      <>
      {isLoggedIn ? loggedInPage() : <h2> Login to see your movies watchlist!</h2>}
      </>
    )
}

export default Movies