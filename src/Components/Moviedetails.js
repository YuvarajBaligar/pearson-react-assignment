import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "../movieimg.jpg";

function Moviedetails() {
  const [moviedata, setMoviedata] = useState([]);

  const { id } = useParams();

  // API CALL
  useEffect(() => {
    fetchmovieData();
  }, [id]);

  const fetchmovieData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=be37ebaf8c3174f9ac31ac0b251216e2&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("MovieResponse:", res);
        const data = res;
        setMoviedata(data);
      });
  };

  console.log("MovieID:", moviedata);

  return (
    <>
      <Navbar />
      <div className="container" key={moviedata.id}>
        <div className="main-body mt-3">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={img}
                      alt="Image"
                      className="thumbline"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{moviedata.original_title}</h4>
                      <p className="text-secondary mb-1">
                        Release Date : {moviedata.release_date}
                      </p>
                      <p className="text-secondary mb-1">
                        Status : {moviedata.status}
                      </p>

                      <p className="text-muted font-size-sm">
                        Film ID : {moviedata.status} {moviedata.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Film Title :</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {moviedata.title}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Language :</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {moviedata.original_language}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Popularity :</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {moviedata.popularity}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Revenue : </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {moviedata.revenue}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {moviedata.overview}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Moviedetails;
