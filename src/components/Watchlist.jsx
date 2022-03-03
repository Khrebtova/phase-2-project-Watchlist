import React from 'react';
import Moviecard from './Moviecard';
import { useNavigate } from 'react-router-dom'

const Watchlist = ({shows, onDeleteShow, onUpdateShow}) => {
    console.log(shows)
    const navigate = useNavigate()
    const handleClick =(e)=>{
      console.log("go to ", e.target.name)
      if(e.target.name === "watchlist"){
        navigate(`/${e.target.name}`)
      }else{
        navigate(`/watchlist/${e.target.name}`)
      }        
    } 
  return (
    <div>
        <button  name="movies" onClick={handleClick}>Show movies</button>
        <button  name="tvseries" onClick={handleClick}>Show TV series</button>
        <ul className='cards'>
            {shows.map(show => <Moviecard key={show.id} show={show} onDeleteShow={onDeleteShow} onUpdateShow={onUpdateShow}/>)}
        </ul>
    </div>
  )
}

export default Watchlist