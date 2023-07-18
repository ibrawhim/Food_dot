import React from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from './Offcanvas'

let bgstyle = {
    backgroundColor: '#ffbd6f'
}
let wine = {
    color: '#8c101f'
}
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg pe-lg-5" style={bgstyle}>
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" style={wine} href="#">Food-Bay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active fw-semibold" style={wine} aria-current="page" to="/home">Home</Link >
        </li>
        <li className="nav-item">
          <a className="nav-link fw-semibold" style={wine} href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-semibold" style={wine} href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text fw-semibold" style={wine}>
        About
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar