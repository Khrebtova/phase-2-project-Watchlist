import React , {useState} from 'react'

const Moviecard = ({show}) => {
    const [watched, setWatched] = useState(false)
    
    const handleDelete =()=> {
        console.log("delete" , show.title)
    }

    const handleWatchedClick = () => {
        setWatched(true)
    }

  return (
    <li className='card'>
        <h4>{show.title}</h4>
        <img src={show.image} alt={show.title} />
        { !watched ? <button className="watched" onClick={handleWatchedClick}>Mark as watched</button> : <button>You saw it!</button>}
        <button className="delete" onClick={handleDelete} > Delete </button>
    </li>
  )
}

export default Moviecard