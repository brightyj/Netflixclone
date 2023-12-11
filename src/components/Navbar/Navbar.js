
import React from 'react';
import './Navbar.css'; // Import your Navbar styling

const Navbar = () => {
  return (
    <div className="navbar">
           <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
       <div className="links">
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#newReleases">New Releases</a>
        <a href="#myList">My List</a>
      </div>
      <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"alt="Netflix Avatar"/>
    </div>
  );
};

export default Navbar;

