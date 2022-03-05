import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { headers } from '../Global';


const NewMovieForm = ({onAddShow}) => {
  const navigate = useNavigate();  
  const defaultData ={
    "title": "",
        "image": "https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",
        "type": "",
        "watched" : false
  }
  const [newShow, setNewShow] = useState(defaultData)
    
    function handleInputChange(e){
      const key = e.target.name;
      const value = e.target.value
      const formData = {...newShow, [key]: value}
      setNewShow(formData)    
    }

    const handleSubmit =(e)=>{
       e.preventDefault()
       if (newShow.title === "" || newShow.type === ""){
         alert("enter movie title and chose Movie or TV series")
       }else{
         fetch(`http://localhost:3001/shows`, {
             method : "POST",
             headers,
             body : JSON.stringify(newShow)
         })
         .then(resp => resp.json())
         .then(data => {          
            onAddShow(data)
            if (data.type === "movie"){
              navigate('/movies')
            }else{
              navigate("/tvseries")
            }
          })
          e.target.title.value = "";
          e.target.image.value = "";
          e.target.type.value = "";
          setNewShow(defaultData)
       }       
    }

   
  return (
    <div className="new-movie-form">
      <h2> Add something new </h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleInputChange} type="text" name="title" placeholder="Title" />
        <input onChange={handleInputChange} type="text" name="image" placeholder="Image URL" />
        <label>Movie<input onChange={handleInputChange} type="radio" name="type" value="movie" /></label>
        <label>TV Series<input onChange={handleInputChange} type="radio" name="type" value="TVseries" /></label>
        <button type="submit">Add to Watchlist</button>
      </form>
    </div>
  )
}

export default NewMovieForm