import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieData from './Movieapp';
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import All from "./pages/All";
import TopTv from "./pages/TopTv";
import Upcoming from "./pages/Upcoming";
import LatestTv from "./pages/LatestTv";
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
        <Route path="/all" element={<All />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/toptv" element={<TopTv />} />
        <Route path="/latestTv" element={<LatestTv />} />
      </Routes>
    </Router>
  );
}

export default App;
