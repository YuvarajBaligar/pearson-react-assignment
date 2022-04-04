import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/movies.css";
import img from "../movieimg.jpg";

function Movieslist(props) {
  // STATE DECLARATION
  const [movieslist, setMovieslist] = useState([]);
  const [favourites, setFavourites] = useState([]);

  var movieval = props.movieval;

  //API CALL
  useEffect(() => {
    fetchmoviedata();
  }, [movieval, favourites]);

  const fetchmoviedata = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieval}?api_key=be37ebaf8c3174f9ac31ac0b251216e2&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Response:", res);
        const data = res.results;
        setMovieslist(data);
      });
  };

  // LOCAL STORAGE SET ITEMS & GET ITEMS
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("Movie-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("Movie-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (mitem) => {
    const newFavouriteList = [...favourites, mitem];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (item) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== item.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  // console.log("Favouritelist:", favourites);

  // RETURN
  return (
    <div>
      <div className="container-fluid" style={{ paddingBottom: "40px" }}>
        <div className="row">
          <div className="col-md-9">
            {movieslist.map((mitem, i) => (
              <div className="view-items">
                <div
                  className="card movies-list"
                  style={{ width: "18rem" }}
                  key={i}
                >
                  <img
                    src={img}
                    className="card-img-top"
                    alt="img-not-available"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{mitem.original_title}</h5>
                    <p className="card-text">{mitem.release_date}</p>
                    <Link
                      to={`/moviedetails/${mitem.id}`}
                      className="btn btn-primary"
                    >
                      View Detail
                    </Link>
                    <i
                      onClick={() => addFavouriteMovie(mitem)}
                      className="fa fa-heart-o"
                      style={{
                        float: "right",
                        fontSize: "24px",
                        color: "red",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-3">
            <div className="fav-list-items">
              <h1 className="fav_list bg-warning">Favouritelist</h1>
              {favourites.map((mitem, i) => (
                <div className="view-items">
                  <div
                    className="card movies-list"
                    style={{ width: "18rem" }}
                    key={i}
                  >
                    <img
                      src={img}
                      className="card-img-top"
                      alt="img-not-available"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{mitem.original_title}</h5>
                      <p className="card-text">{mitem.release_date}</p>
                      <Link
                        to={`/moviedetails/${mitem.id}`}
                        className="btn btn-primary"
                      >
                        View Detail
                      </Link>
                      <i
                        onClick={() => removeFavouriteMovie(mitem)}
                        className="fa fa-heart"
                        style={{
                          float: "right",
                          fontSize: "24px",
                          color: "red",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movieslist;
