import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';
import Moviecard from './Moviecard';

const TVseries = ({shows, onDeleteShow, onUpdateShow}) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
  
  const tvseries = shows.filter(show => show.type === "TVseries")
    
    const navigate = useNavigate()
    
    const handleClick =(e)=>{
      console.log("go to ", e.target.name)
      if(e.target.name === "watchlist"){
        navigate(`/${e.target.name}`)
      }else{
        navigate(`/watchlist/${e.target.name}`)
      }        
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