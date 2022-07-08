import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // When this Row loads, this snippet of code will run
    // If [], run once when the row loads, and don't run it again
    // If [movies], run once when the row loads, then everytime "movies" changes i.e. dependancy
    // In this case, you HAVE TO put [fetchUrl] b/c you're using a variable from outside the block
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className={`row__poster && ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
