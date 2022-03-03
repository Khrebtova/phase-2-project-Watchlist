import React  from 'react';
import { dataURL, headers } from '../Global';

const Moviecard = ({show, onDeleteShow, onUpdateShow}) => {
    
    const handleDelete =()=> {
        fetch(dataURL+`/${show.id}`, {
            method: "DELETE"
        })
        .then(resp=>resp.json())
        .then(data => onDeleteShow(show))
    }

    const handleWatchedClick = () => {
        let isWatched;
        show.watched ? isWatched = false : isWatched = true;
        console.log(show.id)
        fetch(dataURL+`/${show.id}`, {
            method: "PATCH",
            headers, 
            body: JSON.stringify(
                {"watched" : isWatched}
            )
        })
        .then(resp=>resp.json())
        .then(data => onUpdateShow(data))
    }

  return (
    <li className='card'>
        <h4>{show.title}</h4>
        {show.type=== "movie" ? <p>Movie</p> : <p>TV Series</p>}
        <img src={show.image} alt={show.title} />
        { !show.watched ? <button className="notWatched" onClick={handleWatchedClick}>Mark as watched</button> : <button onClick={handleWatchedClick}>You saw it!</button>}
        <button className="delete" onClick={handleDelete} > Delete </button>
    </li>
  )
}

export default Moviecard