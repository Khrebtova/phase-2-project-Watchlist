import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewMovieForm from './components/NewMovieForm';
import Home from './components/Home';
import Watchlist from './components/Watchlist'

function App() {
  const [shows, setShows] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/shows')
    .then(resp => resp.json())
    .then(data => setShows(data))
  }, [])

  return (
    <div className="app">
      <Router>
        <Header />
        <NewMovieForm />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist shows={shows}/>} />
            <Route path='/watchlist/new' element={<NewMovieForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
