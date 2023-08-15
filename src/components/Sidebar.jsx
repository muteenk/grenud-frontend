import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({sidebarClass, setSidebarClass}) => {


    // Sidebar Subtab Classes
    const [services, setServices] = useState({display: "none"});
    const [industries, setIndustries] = useState({display: "none"});
    const [insights, setInsights] = useState({display: "none"});
    const [company, setCompany] = useState({display: "none"});


    // Sidebar Subtab Handlers
    const handleServices = () => {
        if (services.display === "none"){
            setServices({display: "flex"});
        }
        else{
            setServices({display: "none"})
        }
    }

    const handleIndustries = () => {
        if (industries.display === "none"){
            setIndustries({display: "flex"});
        }
        else{
            setIndustries({display: "none"})
        }
    }

    const handleInsights = () => {
        if (insights.display === "none"){
            setInsights({display: "flex"});
        }
        else{
            setInsights({display: "none"})
        }
    }

    const handleCompany = () => {
        if (company.display === "none"){
            setCompany({display: "flex"});
        }
        else{
            setCompany({display: "none"})
        }
    }



    // Sidebar State Handler
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
                <NavLink onClick={closeSidebar} to="/">Home</NavLink>
            </li>
            <li>
                <Link onClick={handleServices} >Services <i class="fa-solid fa-chevron-down"></i></Link>
                <ul className='subTabs' style={services}>
                    <li>
                        <NavLink onClick={closeSidebar} to="/services/web">Web Applications</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/services/android">Android Applications</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/services/ios">IOS Applications</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/services/crossplatform">Cross-Platform Applications</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/services/salesforce">Salesforce</NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <Link onClick={handleIndustries} >Industries <i class="fa-solid fa-chevron-down"></i></Link>
                <ul className='subTabs' style={industries}>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/financial">Financial Services</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/realEstates">Real Estates</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/education">Education</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/logistics">Logistics</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/nonProfits">Non-Profits</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/manufacturing">Manufacturing</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/retail">Retail</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/healthcare">Healthcare</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/sports">Sports</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/media">Media</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/sustainability">Sustainability</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/industries/agriculture">Agriculture</NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <Link onClick={handleInsights} >Insights <i class="fa-solid fa-chevron-down"></i></Link>
                <ul className='subTabs' style={insights}>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/caseStudy">Case Study</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/whitePapers">White Papers</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/infographics">Infographics</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/useCases">Use Cases</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/podcasts">Podcasts</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/videos">Videos</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/insights/customerStories">Customer Success Stories</NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <Link onClick={handleCompany} >Company <i class="fa-solid fa-chevron-down"></i></Link>
                <ul className='subTabs' style={company}>
                    <li>
                        <NavLink onClick={closeSidebar} to="/company/about">About us</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeSidebar} to="/company/career">Career</NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink onClick={closeSidebar} to="/contact">Contact</NavLink>
            </li>
        </ul>

    </div>

  )
}

export default Sidebar