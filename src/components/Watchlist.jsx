import React from 'react';
import Moviecard from './Moviecard';

const Watchlist = ({shows}) => {
  const showList = shows.map((show)=> <Moviecard key ={show.id} show={show}/>)  
  return (
    <ul className='cards'>{showList}</ul>
  )
}

export default Watchlist