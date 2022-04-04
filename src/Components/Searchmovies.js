import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Movieslist from "./Movielist";

function Searchmovies() {
  const [movieval, setMovieval] = useState("");

  const handleClick = (event) => {
    if (event === "popular") {
      setMovieval(event);
    } else if (event === "upcoming") {
      setMovieval(event);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-md-center mt-2">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="movie"
                value="popular"
                id="popular"
                onClick={(e) => handleClick(e.target.value)}
              />
              <label className="form-check-label" htmlFor="popular">
                Popular Movies
              </label>
            </div>
          </div>

          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="movie"
                value="upcoming"
                id="upcoming"
                onClick={(e) => handleClick(e.target.value)}
              />
              <label className="form-check-label" htmlFor="upcoming">
                Upcoming
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div>{movieval ? <Movieslist movieval={movieval} /> : null}</div>
      <Footer />
    </div>
  );
}

export default Searchmovies;
