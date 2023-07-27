import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Image Imports
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <Link to="/" className="branding">
                <img src={logo} alt="Grenud" />
            </Link>
        </div>
        <div className="right">
            <ul className="nav-tabs">
                <li>
                    <NavLink to="/" className={(isActive) => isActive ? "active" : ""} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/">Industries</NavLink>
                </li>
                <li>
                    <NavLink to="/">Insights</NavLink>
                </li>
                <li>
                    <NavLink to="/">Company</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>
            <Link to="/" className="pri-btn-hollow">Hire a Professional</Link>
        </div>
    </nav>
  )
}

export default Navbar