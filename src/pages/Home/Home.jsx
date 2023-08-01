import React from 'react'
import './Home.css'

// Image imports
import heroImg from '../../assets/home/home-hero.jpeg'

const Home = () => {
  return (
    
    <>

      <section id="home-hero">

        <div className="hero-info">
          <h1 className='hero-heading'>Feel the lightning speed softwares with <span className='accent-text'>GRENUD's top notch professionals</span></h1>
        </div>

        <div className="hero-display">
          <img src={heroImg} alt="" />
        </div>

      </section>

    </>

  )
}

export default Home;