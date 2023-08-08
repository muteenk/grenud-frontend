import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({sidebarClass, setSidebarClass}) => {

    const closeSidebar = () => {
        setSidebarClass("hideSidebar")
    }




  return (

    <div id="sidebar" className={sidebarClass}> 

        <div className="sidebar-header">
            <button onClick={ closeSidebar }><i class="fa-solid fa-xmark"></i></button>
        </div>

        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <Link>Services <i class="fa-solid fa-chevron-down"></i></Link>
            </li>
            <li>
                <Link>Industries <i class="fa-solid fa-chevron-down"></i></Link>
            </li>
            <li>
                <Link>Insights <i class="fa-solid fa-chevron-down"></i></Link>
            </li>
            <li>
                <Link>Company <i class="fa-solid fa-chevron-down"></i></Link>
            </li>
            <li>
                <NavLink to="/">Contact</NavLink>
            </li>
        </ul>

    </div>

  )
}

export default Sidebar