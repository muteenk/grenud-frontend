import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// Image imports

const relPath = "/Videos/home-hero.mp4"

const Home = () => {
  return (
    
    <>

      <section id="home-hero">

      <div className="home-hero-info">
        <p>Reimagine Your Enterprise Business Applications </p>
        <h1 className="hero-heading">
        Feel the lightning speed softwares with <span className='primary-text'> GRENUD's top notch professionals </span>
        </h1>

        <Link to="/" className='pri-btn-solid'>Get your own App</Link>
      </div>

      <div class="video-container">
        <video autoPlay loop muted playsInline className='heroBack'>
          <source src={relPath} type='video/mp4'/>
        </video>
      </div>

      

      </section>

    </>

  )
}

export default Home;