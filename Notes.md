# Overview
Watchlist app will help user track all the TV-shows and movies what he/she wanted to watch in the future. Add new movies, mark them as "watched", delete them from the list. 

## MVP
* 5 components:
    1. home-watchlist
    2. NavBar
    3. Signup
    4. Login
    5. movieform
    6. moviecard

* 3 client side routes
    1. / - home component
    2. /signup - Signup
    3. /login - Login
    4. /watchlist/new - CharacterForm
    5. /watchlist - watchlist

* use json-server : array of objects(movies/tvShows)

## Stretch goals

## Data

{
    "watchlist": [
        {
            "id" : 1,
            "title" : "Game of thrones",
            "image" : "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
            "type" : "TV show",
            "watched": false,
        }
    ]
}