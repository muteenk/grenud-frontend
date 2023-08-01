import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// Image imports
import heroImg from '../../assets/home/home-hero.png'

const Home = () => {
  return (
    
    <>

      <section id="home-hero">

        <div className="hero-display">
          <div className="header">
            <a href="#"><i class="fa-solid fa-bars"></i></a>
          </div>
          <img src={heroImg} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum sint perferendis optio dignissimos consequuntur. Facilis eaque dolore maiores ad?</p>
          <Link className="pri-btn" href="#">Know More</Link>
        </div>

        <div className="hero-info">
          <h1 className='hero-heading'>Feel the lightning speed softwares with GRENUD's top notch professionals</h1>
        </div>

      </section>

    </>

  )
}

export default Home;