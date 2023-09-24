import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// Image Imports
import logo from "../assets/logos/logo.png"

// Component Imports
import Sidebar from './Sidebar'


const setActive = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "";


const Navbar = () => {

    const [sidebarClass, setSidebarClass] = useState("initSidebar");
    const [navClass, setNavClass] = useState("");
    const [scrollTop, setScrollTop] = useState(0);

    

    const handleScroll = () => {
        setScrollTop(window.scrollY);

        if (scrollTop > 100){
            setNavClass("scrolled");
        }
        else if (scrollTop <= 100){
            setNavClass("");
        }
    };

    window.addEventListener("scroll", handleScroll);

    const sidebarHandler = () => {
        
        if (sidebarClass === "initSidebar" || sidebarClass === "hideSidebar") {
            setSidebarClass("showSidebar");
        }
    }

    const [servicesDrawer, setServicesDrawer] = useState({});
    const [industriesDrawer, setIndustriesDrawer] = useState({});
    const [insightsDrawer, setInsightsDrawer] = useState({})
    const [companyDrawer, setCompanyDrawer] = useState({})



  return (
    <>
        <nav className={navClass}>
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
                    <li onMouseOver={() => {setServicesDrawer({"display": "flex"})}} onMouseLeave={() => {setServicesDrawer({"display": "none"})}}>
                        <NavLink to="/services" className={setActive}>Services <i class="fa-solid fa-chevron-down"></i></NavLink>
                    </li>
                    <li onMouseOver={() => {setIndustriesDrawer({"display": "flex"})}} onMouseLeave={() => {setIndustriesDrawer({"display": "none"})}}>
                        <NavLink to="/industries" className={setActive}>Industries <i class="fa-solid fa-chevron-down"></i></NavLink>
                    </li>
                    <li onMouseOver={() => {setInsightsDrawer({"display": "flex"})}} onMouseLeave={() => {setInsightsDrawer({"display": "none"})}}>
                        <NavLink to="/insights" className={setActive}>Insights <i class="fa-solid fa-chevron-down"></i></NavLink>
                    </li>
                    <li onMouseOver={() => {setCompanyDrawer({"display": "flex"})}} onMouseLeave={() => {setCompanyDrawer({"display": "none"})}}>
                        <NavLink to="/company" className={setActive}>Company <i class="fa-solid fa-chevron-down"></i></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={setActive} >Contact</NavLink>
                    </li>
                </ul>
                <Link to="/" className="pri-btn-hollow">Hire a Professional</Link>

                <button id='ham-btn' onClick={sidebarHandler}>
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>

            <div id="servicesDrawer" onMouseOver={() => {setServicesDrawer({"display": "flex"})}} onMouseLeave={() => {setServicesDrawer({"display": "none"})}} style={servicesDrawer} className='drawer'>
                <ul>
                    <li>
                        <Link to="/services/web">Web Applications</Link>
                    </li>
                    <li>
                        <Link to="/services/android">Android Applications</Link>
                    </li>
                    <li>
                        <Link to="/services/ios">IOS Applications</Link>
                    </li>
                    <li>
                        <Link to="/services/crossplatform">Cross-Platform Applications</Link>
                    </li>
                    <li>
                        <Link to="/services/salesforce">Salesforce</Link>
                    </li>
                </ul>
            </div>

            <div id="industriesDrawer" onMouseOver={() => {setIndustriesDrawer({"display": "flex"})}} onMouseLeave={() => {setIndustriesDrawer({"display": "none"})}} style={industriesDrawer} className='drawer'>

                <ul>
                    <li>
                        <Link to="/industries/financial">Financial Services</Link>
                    </li>
                    <li>
                        <Link to="/industries/realEstates">Real Estates</Link>
                    </li>
                    <li>
                        <Link to="/industries/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/industries/logistics">Logistics</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/industries/nonProfits">Non-Profits</Link>
                    </li>
                    <li>
                        <Link to="/industries/manufacturing">Manufacturing</Link>
                    </li>
                    <li>
                        <Link to="/industries/retail">Retail</Link>
                    </li>
                    <li>
                        <Link to="/industries/healthcare">Healthcare</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/industries/sports">Sports</Link>
                    </li>
                    <li>
                        <Link to="/industries/media">Media</Link>
                    </li>
                    <li>
                        <Link to="/industries/Sustainability">Sustainability</Link>
                    </li>
                    <li>
                        <Link to="/industries/Agriculture">Agriculture</Link>
                    </li>
                </ul>

            </div>

            <div id="insightsDrawer" onMouseOver={() => {setInsightsDrawer({"display": "flex"})}} onMouseLeave={() => {setInsightsDrawer({"display": "none"})}} style={insightsDrawer} className='drawer'>

                <ul>
                    <li>
                        <Link to="/insights/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/insights/caseStudy">Case Study</Link>
                    </li>
                    <li>
                        <Link to="/insights/whitePapers">White Papers</Link>
                    </li>
                    <li>
                        <Link to="/insights/infographics">Infographics</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/insights/useCases">Use Cases</Link>
                    </li>
                    <li>
                        <Link to="/insights/podcasts">Podcasts</Link>
                    </li>
                    <li>
                        <Link to="/insights/videos">Videos</Link>
                    </li>
                    <li>
                        <Link to="/insights/customerStories">Customer Success Stories</Link>
                    </li>
                </ul>

            </div>

            <div id="companyDrawer" onMouseOver={() => {setCompanyDrawer({"display": "flex"})}} onMouseLeave={() => {setCompanyDrawer({"display": "none"})}} style={companyDrawer} className='drawer'>

                <ul>
                    <li>
                        <Link to="/company/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/company/career">Career</Link>
                    </li>
                </ul>

            </div>

        </nav>

        <Sidebar sidebarClass={sidebarClass} setSidebarClass={setSidebarClass} />
    </>
  )
}

export default Navbar