import React from 'react'
import Logo from './Logo'
import { FaSearch, FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#" aria-label="HobbyCue home">
          <Logo height={40} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <form className="d-none d-md-flex ms-3 me-auto" style={{minWidth:320}} onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group">
              <input type="search" className="form-control" placeholder="Search here..." aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit" aria-label="search"><FaSearch aria-hidden="true" size={18} /></button>
            </div>
          </form>

          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Explore</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hobbies</a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Arts</a></li>
                <li><a className="dropdown-item" href="#">Sports</a></li>
                <li><a className="dropdown-item" href="#">Cooking</a></li>
              </ul>
            </li>

            <li className="nav-item d-flex align-items-center">
              <button className="btn btn-sm btn-link text-muted me-2" aria-label="notifications"><FaBell aria-hidden="true" size={18} /></button>
            </li>
            <li className="nav-item d-flex align-items-center">
              <button className="btn btn-sm btn-link text-muted me-2" aria-label="favorites"><FaHeart aria-hidden="true" size={18} /></button>
            </li>
            <li className="nav-item d-flex align-items-center">
              <button className="btn btn-sm btn-link text-muted me-3" aria-label="cart"><FaShoppingCart aria-hidden="true" size={18} /></button>
            </li>

            <li className="nav-item">
              <a href="#signin" className="btn btn-outline-primary btn-sm">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
