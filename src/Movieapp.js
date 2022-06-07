import React,{useState, useEffect} from 'react'; 
import './App.css'; 
import MovieBox from './MovieBox';
import Navbar from "./components/Navbar";
import {Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 

/* 

const findMoviesByTitle = (title) => { 

  const API_KEY = process.env.REACT_APP_API_KEY; 

  return http.get(`search/movie?api_key=${API_KEY}&query=${title}`); 

};*/ 

 
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2"; 
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2&query=" 

function Movieapp({ searchTerm }) { 

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    if(searchTerm){
      searchMovie();
    }
  }, [searchTerm]);

  const searchMovie = async()=>{ 
    console.log('Searching') 

    try{ 
      const url= API_SEARCH + searchTerm; 
      const res= await fetch(url); 
      const data= await res.json(); 
      console.log(data); 
      setMovies(data.results); 
    } 

    catch(e){ 
      console.log(e); 
    } 
  } 

    return ( 
    <>         

    <div className="container"> 
      {movies && movies.length > 0 ?( 
        <div className="grid"> 
          {movies.map((movieReq)=> 
          <MovieBox key={movieReq.id} {...movieReq}/>)} 
        </div>
      ):( 
        <h2>No movies found, please try again!</h2> 
      )} 
    </div> 
    </> 
  ); 
} 

export default Movieapp; 