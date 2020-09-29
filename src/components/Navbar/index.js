import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
    <span class="navbar-brand mb-1 h1 ">Karla Silva Rodríguez</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
     </button>
    
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav flex-row ml-md-auto d-md-flex justify-content-center">
      <li class="nav-item p-2">
      <Link
        to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/about"
            ? "nav-link active"
            : "nav-link"
      }
      >
        About
      </Link>


      </li>
      <li class="nav-item p-2">
      <Link
  to="/discover"
  className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
>
  Discover
    </Link>

      </li>
      <li class="nav-item p-2">
      <a href="Resume.pdf" class="nav-link" download="./Assets/Resume.pdf">My Resume</a>
      </li>
      <li class="nav-item p-2">
      <Link
  to="/contact"
  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
>
  Contact
    </Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
