import React, {useState} from 'react'

const NewMovieForm = ({onAddShow}) => {
    const [newShow, setNewShow] = useState({  
        "title": "",
        "image": "https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",
        "type": "",
        "watched" : false
    })
  
    function handleInputChange(e){
      const key = e.target.name;
      const value = e.target.value
      const formData = {...newShow, [key]: value}
      setNewShow(formData)    
    }

    const handleSubmit =(e)=>{
       e.preventDefault()
       
       fetch(`http://localhost:3001/shows`, {
           method : "POST",
           headers: {
            "Accept": "applocation/json",
            "Content-type" : "application/json"
           },
           body : JSON.stringify(newShow)
       })
       .then(resp => resp.json())
       .then(data => onAddShow(data))

    }

   
  return (
    <div className="new-movie-form">
      <h2> Add something new </h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleInputChange} type="text" name="title" placeholder="movie title" />
        <input onChange={handleInputChange} type="text" name="image" placeholder="Image URL" />
        <label>Movie<input onChange={handleInputChange} type="radio" name="type" value="movie" /></label>
        <label>TV Series<input onChange={handleInputChange} type="radio" name="type" value="TVseries" /></label>
        <button type="submit">Add to Watchlist</button>
      </form>
    </div>
  )
}

export default NewMovieForm