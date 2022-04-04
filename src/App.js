import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Moviedetails from "./Components/Moviedetails";
import Navbar from "./Components/Navbar";
import Searchmovies from "./Components/Searchmovies";

function App() {
  let name = localStorage.getItem("Username");
  return (
    <>
      {name ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/navbar" element={<Navbar />}></Route>
            <Route exact path="/footer" element={<Footer />}></Route>
            <Route
              exact
              path="/searchmovies"
              element={<Searchmovies />}
            ></Route>

            <Route
              exact
              path="/moviedetails/:id"
              element={<Moviedetails />}
            ></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
