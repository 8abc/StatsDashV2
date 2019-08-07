import React from "react";

const Nav = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-md-center"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="/dash">
            Dash
          </a>
          <a class="nav-item nav-link" href="/Login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
