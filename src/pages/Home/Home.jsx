import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'



// -------- Data imports -----------

import {techStackTimelineContent, techCards}  from "./HomeData"



// -------- Media imports -----------

// Hero Section Background Video
const heroVideo = "/Videos/home-hero.mp4"





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
          <source src={heroVideo} type='video/mp4'/>
        </video>
      </div>

      </section>





      <section className="collidingBanners">

        <div className="banner lowBanner">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <Link to="/" className='pri-btn'>Learn more</Link>
        </div>

        <div className="banner highBanner">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <Link to="/" className='pri-btn'>Know more</Link>
        </div>

      </section>



    


      <section id="techCards">

        <h1 className='main-heading'>Grenud - Propelling your business to success with emerging tech</h1>

        <p className="main-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus temporibus voluptatibus expedita labore, magni explicabo commodi consequatur adipisci quo officia!</p>


        <div className="tech-card-container">

          { techCards.map( card => {
              return (
              <Link to="/">
                <div className="tech-card">
                  <img src={card.img} alt="" />
                  <h4>{card.title}</h4>
                  <p>{card.content}</p>
                </div>
              </Link>
              )
            })
          }

        </div>

        <Link to="/" className='pri-btn-solid'>Give your projects a Grenud Edge</Link>

      </section>






      <section id="techStack">

        <div className="card-container">

          { techStackTimelineContent.map( (card, index) => {
              return (
              <div className={`tech-card ${card.isLeft ? "left" : "right"}`}>
                <span className="card-index">{index + 1}</span>
                <img src={card.img} alt={card.title} />
                <div className="tech-card-info">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
              )
          })}
          
        </div>

      </section>

    </>

  )
}

export default Home;