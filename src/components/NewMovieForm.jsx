import React, {useState} from 'react'

const NewMovieForm = () => {
    const [newShow, setNewShow] = useState({  
        "title": "",
        "image": "",
        "type": "",
    })
  
    function handleInputChange(e){
      const key = e.target.name;
      const value = e.target.value
      const formData = {...newShow, [key]: value}
      setNewShow(formData)    
    }

    const handleSubmit =(e)=>{
       e.preventDefault()
       console.log("submit", newShow) 
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