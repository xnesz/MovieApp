import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieData from './Movieapp';
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const search = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    
    <Router>
      <Navbar search={search} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<Search />} />
      </Routes>

        
    </Router>
    
  );
}

export default App;
