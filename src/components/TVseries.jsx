import React from 'react';
import { useNavigate } from 'react-router-dom';
import Moviecard from './Moviecard';

const TVseries = ({shows, onDeleteShow, onUpdateShow, isLoggedIn}) => {
  const tvseries = shows.filter(show => show.type === "TVseries")
  const navigate = useNavigate()
    
  const handleClick =(e)=>{        
      navigate(`/${e.target.name}`)       
  }

  const loggedInPage =()=>{
    return (
      <div>
        <button name="watchlist" onClick={handleClick}>Show my whole watchlist</button>
        <button name="movies" onClick={handleClick}>Show movies</button>
        <ul className='cards'>
          {tvseries.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)}
        </ul>
      </div>
    )}

  return (
    <>
    {isLoggedIn ? loggedInPage() : <h2> Login to see your TV series watchlist!</h2>}
    </>
  )
}

export default TVseries