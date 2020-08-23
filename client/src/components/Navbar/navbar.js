import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/search" className={
              window.location.pathname === "/search" || window.location.pathname === "/search" ? "nav-link active" : "nav-link"
            }>Search</Link>
          </li>
          <li className="nav-item search">
            <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved</Link>
          </li>
        </ul>
      </div>
      <div className="search-div">

      </div>
    </nav>
  );
}

export default NavBar;