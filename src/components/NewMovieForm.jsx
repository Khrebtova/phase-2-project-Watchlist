import React from 'react'

const NewMovieForm = () => {
    
    const handleSubmit =()=>{
       console.log("submit") 
    }

    const handleInputChange = (e) => {
        console.log(e.target.vale)
    }
  return (
    <div className="new-movie-form">
      <h2> Add something new </h2>
      <form >
        <input type="text" name="title" placeholder="movie title" />
        <input type="text" name="image" placeholder="Image URL" />
        <label>Movie<input type="radio" name="type" value="movie" /></label>
        <label>TV Series<input type="radio" name="type" value="TVseries" /></label>
        <button type="submit">Add to Watchlist</button>
      </form>
    </div>
  )
}

export default NewMovieForm