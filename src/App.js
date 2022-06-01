import React,{useState, useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2";
function App() {

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  return (
    <div className="container">
      <div className="grid">
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
  );
}

export default App;
