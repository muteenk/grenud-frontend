import React from 'react'
import { Link } from 'react-router-dom';

import grenudWhiteBGLogo from '../assets/logos/logo.jpg'

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-head">
        <div className="branding">
          <Link to="/"><img src={grenudWhiteBGLogo} alt="Grenud" /></Link>
          <h3>GRENUD is the world’s preferred salesforce development company that specialises in Salesforce implementation consulting, Salesforce customization
consulting, and Salesforce customization.</h3>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-section">
          <h4>Company</h4>
          <ul>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li><Link href="#">Privacy Policies</Link></li>
            <li><Link href="#">Cookie Policies</Link></li>
            <li><Link className="pri-btn-solid" href="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-body-section">
          <h4>Insights</h4>
          <ul>
            <li><Link href="#">Blogs</Link></li>
            <li><Link href="#">White Papers</Link></li>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Infographics</Link></li>
            <li><Link href="#">Videos</Link></li>
          </ul>
        </div>
        <div className="footer-body-section">
          <h4>Services</h4>
          <ul>
            <li><Link href="#">Web Applications</Link></li>
            <li><Link href="#">Android Applications</Link></li>
            <li><Link href="#">IOS Applications</Link></li>
            <li><Link href="#">Cross-platform Applications</Link></li>
            <li><Link href="#">Salesforce</Link></li>
          </ul>
        </div>
        <div className="footer-body-section">
          <h4>Contacts</h4>
          <ul>
            <li><Link href="#">Address: L-329, Sector Delta-2, Greater Noida, Gautam Budh Nagar, 201308, UP, India</Link></li>
            <li><Link href="#">Phone: +91-9871106873</Link></li>
            <li><Link href="#">Email: admin@cloudgrenud.com</Link></li>
            <li><Link href="#">Website: www.cloudgrenud.com </Link></li>
          </ul>
        </div>
        <div className="footer-body-section" id="socials">
          <ul>
            <li><Link href="#" id='facebook-ico'><i class="fa-brands fa-facebook"></i></Link></li>
            <li><Link href="#" id='insta-ico'><i class="fa-brands fa-instagram"></i></Link></li>
            <li><Link href="#" id='twitter-ico'><i class="fa-brands fa-twitter"></i></Link></li>
            <li><Link href="#" id='linkedin-ico'><i class="fa-brands fa-linkedin"></i></Link></li>
            <li><Link href="#" id='youtube-ico'><i class="fa-brands fa-youtube"></i></Link></li>
            <li><Link href="#" id='whatsapp-ico'><i class="fa-brands fa-whatsapp"></i></Link></li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright &copy; {year} CloudGrenud. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer