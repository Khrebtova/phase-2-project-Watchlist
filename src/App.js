import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewMovieForm from './components/NewMovieForm';
import Home from './components/Home';
import Watchlist from './components/Watchlist'
import TVseries from './components/TVseries';
import Movies from './components/Movies';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [shows, setShows] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/shows')
    .then(resp => resp.json())
    .then(data => setShows(data))
  }, [])

  const addShow =(newShow)=>{    
    setShows([...shows, newShow])
  }
  const deleteShow = (deletedShow) => {
    const newList = shows.filter(show => show.id !== deletedShow.id);
    setShows(newList)
  }

  const updateShow =(updatedShow) =>{
    const newList = shows.map(show =>  show.id === updatedShow.id ? updatedShow : show)
    setShows(newList)
  }

  return (
    <div className="app">
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        {isLoggedIn ? <NewMovieForm onAddShow={addShow}/> : null}
        <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
            <Route path="/watchlist" element={<Watchlist onDeleteShow={deleteShow} onUpdateShow={updateShow} shows={shows} isLoggedIn={isLoggedIn}/>} />
            <Route path='/tvseries' element={<TVseries onDeleteShow={deleteShow} onUpdateShow={updateShow} shows={shows} isLoggedIn={isLoggedIn}/>} />
            <Route path='/movies' element={<Movies onDeleteShow={deleteShow} onUpdateShow={updateShow} shows={shows} isLoggedIn={isLoggedIn}/>} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
