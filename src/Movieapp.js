import React,{useState, useEffect} from 'react'; 
import './App.css'; 
import MovieBox from './MovieBox';
import Navbar from "./components/Navbar";
import {Container, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
 
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2"; 
const API_ALL="https://api.themoviedb.org/3/movie/now_playing?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2&language=en-US&page=2"; 
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2&query="; 
const API_UPCOMING="https://api.themoviedb.org/3/movie/upcoming?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2&language=en-US&page=1";
const API_TV="https://api.themoviedb.org/3/tv/top_rated?api_key=4c7db73d8ed85fc0bdfe380c0e20e1a2&language=en-US&page=1";
//const API_USER="https://localhost:44363/api/CRUD";

function Movieapp({ searchTerm, popular, all, upcoming, toptv }) { 

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    if(popular){
      fetchData(API_URL);
    }
  }, [])


  useEffect(() => {
    if(all){
      fetchData(API_ALL);
    }
  }, [])

  useEffect(() => {
    if(upcoming){
      fetchData(API_UPCOMING);
    }
  }, [])

  useEffect(() => {
    if(toptv){
      fetchData(API_TV);
    }
  }, [])

  useEffect(() => {
    if(searchTerm){
      searchMovie();
    }
  }, [searchTerm]);

  const searchMovie = async()=>{ 
    console.log('Searching') 

    const url= API_SEARCH + searchTerm; 
    fetchData(url);
  } 

    const fetchData = async (url) => {
      try{ 
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