import React from 'react'
import { Link } from 'react-router-dom'

let bgstyle = {
    backgroundColor: '#ffbd6f'
}
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={bgstyle}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Food-Ted</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/home">Home</Link >
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        About
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar