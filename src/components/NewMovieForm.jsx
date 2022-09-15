import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { headers, dataURL, defaultImage } from '../Global';

const NewMovieForm = ({onAddShow}) => {
  const navigate = useNavigate();  
  const defaultData ={
    "title": "",
    "image": defaultImage,
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
      alert("Enter title and chose Movie or TV series")
    }else{
      fetch(dataURL, {
        method : "POST",
        headers,
        body : JSON.stringify(newShow)
        })
      .then(resp => resp.json())
      .then(data => {          
        onAddShow(data)
        navigate(`/${data.type}`)
      })
      .catch(error => alert(error))

    e.target.title.value = "";
    e.target.image.value = "";
    e.target.type.checked = false;
    
    setNewShow(defaultData)
    }       
  }
   
  return (
    <div className="new-movie-form">
      <h2> Add something new </h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleInputChange} type="text" name="title" placeholder="Title"  />
        <input onChange={handleInputChange} type="text" name="image" placeholder="Image URL" />
        <label>Movie<input onChange={handleInputChange} type="radio" name="type" value="movies" checked={newShow.type ==="movies"}/></label>
        <label>TV Series<input onChange={handleInputChange} type="radio" name="type" value="TVseries" checked={newShow.type ==="TVseries"}/></label>
        <button type="submit">Add to Watchlist</button>
      </form>
    </div>
  )
}

export default NewMovieForm