import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Image Imports
import logo from "../assets/logo.png"


const setActive = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""


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
                    <NavLink to="/" className={setActive} >Home</NavLink>
                </li> 
                <li>
                    <NavLink to="/services" className={setActive}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/industries" className={setActive}>Industries</NavLink>
                </li>
                <li>
                    <NavLink to="/insights" className={setActive}>Insights</NavLink>
                </li>
                <li>
                    <NavLink to="/company" className={setActive}>Company</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={setActive} >Contact</NavLink>
                </li>
            </ul>
            <Link to="/" className="pri-btn-hollow">Hire a Professional</Link>
        </div>
    </nav>
  )
}

export default Navbar