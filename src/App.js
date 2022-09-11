import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=677c558a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4'>
        <MovieListHeading heading="Movies"></MovieListHeading>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
      </div>
      <div className="row">
        <MovieList movies = {movies}></MovieList>
      </div>
      
    </div>
  );
}

export default App;
