import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>

<nav class="navbar navbar-expand-lg p-4">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand text-warning" href="/foodlogs">THA FOOD LOG</a>

        <ul class="navbar-nav mb-2 ms-auto mb-lg-0">


          <li class="nav-item">
            <a class="nav-link active text-warning" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="/foodlogs/new">New Log</a>
          </li>
         </ul>




         <ul class="navbar-nav mb-2 ms-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-warning" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-warning" href="/register">Register</a>
            </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="/logout">Logout</a>
              </li>

          </ul>

      </div>
    </div>
  </nav>

    </header>
  )
}

export default Navbar