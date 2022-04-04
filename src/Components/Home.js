import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/login.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var name = localStorage.getItem("Username");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    let username = email;
    let userpassword = password;
    localStorage.setItem("Username", username);
    localStorage.setItem("UserPassword", userpassword);
    let name = localStorage.getItem("Username");
    let pass = localStorage.getItem("UserPassword");
    // console.log("USER&PASS:", name, pass);
    if (name && pass !== "") {
      window.location("/navbar");
    } else {
      window.location("/");
    }
  }

  return (
    <div>
      {name ? (
        <Navbar />
      ) : (
        <>
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 mx-auto login">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={validateForm}
                    className="btn btn-primary login-button"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
