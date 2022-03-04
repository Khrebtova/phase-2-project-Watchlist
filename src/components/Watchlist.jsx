import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';
import Moviecard from './Moviecard';

const Watchlist = ({shows, onDeleteShow, onUpdateShow}) => {
  const [isLoggedIn] = useContext(UserContext);
  const navigate = useNavigate();
            
  const handleClick =(e)=>{        
    navigate(`/${e.target.name}`)       
  }
            
  const showsToDisplay = shows.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)
    
  const loggedInPage =()=>{
      return (
        <div>
          <button  name="movies" onClick={handleClick}>Show movies</button>
          <button  name="tvseries" onClick={handleClick}>Show TV series</button>                
          <ul className='cards'>
            {showsToDisplay}
          </ul>
        </div>
      )
  }

  return (
      <>
        {isLoggedIn ? loggedInPage() : <h2> Login to see your watchlist!</h2>}
      </> 
  )
}

export default Watchlist;