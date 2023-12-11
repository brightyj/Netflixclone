import React from "react";
import "./App.css";
import Login from "./components/Login/Login.js"; // Correct import path
import  Navbar  from "./components/Navbar/Navbar";
import  Banner  from "./components/Banner/Banner";
import  Rowpost  from "./components/Rowpost/Rowpost";
import {
  HorrorMovies,
  action,
  originals,
  ComedyMovies,
  Documentaries,
  RomanceMovies,
} from "./components/constants/Url.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = {
    name: "brighty",
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/Rowpost" element={<Rowpost />} />
          {/* Main Route, only rendered when the user is logged in */}
          {user && (
            <Route
              path="/main"
              element={
                <React.Fragment>
                  <Navbar />
                  <Banner />
                  <Rowpost url={originals} title="NETFLIX ORIGINALS" />
                  <Rowpost url={action} title="Action" isSmall />
                  <Rowpost
                    url={HorrorMovies}
                    title="Horror Movies"
                    isSmall
                  />
                  <Rowpost
                    url={ComedyMovies}
                    title="Comedy Movies"
                    isSmall
                  />
                  <Rowpost
                    url={RomanceMovies}
                    title="Romance Movies"
                    isSmall
                  />
                  <Rowpost
                    url={Documentaries}
                    title="Documentaries"
                    isSmall
                  />
                </React.Fragment>
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;