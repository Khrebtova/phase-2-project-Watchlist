import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/User';
import Moviecard from './Moviecard';

const Watchlist = ({shows, onDeleteShow, onUpdateShow}) => {
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
    
    const showsToDisplay = shows.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)
    

    const loggedInPage =()=>{
        return (
            <div>
                <button  name="movies" onClick={handleClick}>Show movies</button>
                <button  name="tvseries" onClick={handleClick}>Show TV series</button>
                <ul className='cards'>
                    {/* {shows.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)} */}
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

export default Watchlist