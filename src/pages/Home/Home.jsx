import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'



// -------- Data imports -----------

import {techStackTimelineContent, techCards, industryTabs}  from "./HomeData"



// -------- Media imports -----------

// Hero Section Background Video
const heroVideo = "/Videos/home-hero.mp4"





const Home = () => {

  // -------- State Variables -----------
  const [activeIndustryTab, setActiveIndustryTab] = useState("Financial Services")


  // -------- Event Handlers -----------

  const handleIndustryTabs = (tabname) => {

    setActiveIndustryTab(tabname)
    
  }







  return (
    
    <>

      {/* Home Hero Section Starts Here  */}

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

      {/* Home Hero Section Ends Here */}












      {/* Tech Cards Section Starts Here  */}


      <div className="spotBackground"
      style={{
        height: "26em",
        width: "26em",
        top: "94em",
        left: "82%",
      }}></div>


      <div className="spotBackground"
      style={{
        height: "32em",
        width: "32em",
        top: "123em",
        right: "78%",
      }}></div>


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



      {/* Tech Cards Section Ends Here  */}















      {/* Colliding Banners Section Starts Here  */}


      <div className="spotBackground"
      style={{
        height: "40em",
        width: "40em",
        top: "49em",
        right: "72%",
      }}></div>

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


      {/* Colliding Banners Section Ends Here  */}








      {/* Slab Banner Section Starts Here */}

      <div className="spotBackground"
      style={{
        height: "35em",
        width: "35em",
        top: "172em",
        right: "50%",
      }}></div>

      <section id="slabBanner">

          <div className="main-slab slab">
            <h2 className='main-heading'>This is a slab heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae a magni quaerat hic perspiciatis harum nobis mollitia blanditiis beatae.</p>
            <Link to="/" className='pri-btn-hollow'>Learn More</Link>
          </div>
          <div className="img-slab slab">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="" />
            <p className="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eligendi, voluptates id omnis voluptatum debitis veritatis dolore neque dignissimos quasi!
            </p>
            <span className="quote-author">- Quote Author</span>
          </div>
          <div className="img-slab slab">
            <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eligendi, voluptates id omnis voluptatum debitis veritatis dolore neque dignissimos quasi!
            </p>
            <span className="quote-author">- Quote Author</span>
          </div>

      </section>


      {/* Slab Banner Section Ends Here */} 









      {/* Industry Section Tabs Starts Here */}


      <section id="industrySectionTabs">
        <h2 className="main-heading">Technology is transforming every industry</h2>
        <p className="main-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro asperiores officiis earum modi ratione esse quidem nihil quis commodi.</p>

        <div className="tab-container">
          <div className="tab-buttons">
            { Object.keys(industryTabs).map( (tab, index) => {
                return (
                  <button className={`tab-btn ${activeIndustryTab === tab ? "active" : ""}`} onClick={() => {handleIndustryTabs(tab)}} key={index}>{tab}</button>
                )
            }) }
          </div>
          <div className="tab-display">
            {
              Object.keys(industryTabs).map( (tab, index) => {
                return (
                  <div className={`tab ${activeIndustryTab === tab ? "active" : ""}`} key={index}>
                    <img src={industryTabs[tab].img} alt="" />
                    <h3>{tab}</h3>
                    <p>{industryTabs[tab].content}</p>
                    <Link to={industryTabs[tab].link} className='pri-btn-solid'>EXPLORE</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      
      {/* Industry Section Tabs Ends Here */}












      {/* Text Banner Section Starts Here */}

      <section id="homeTextBanner">

          <h2 className="main-heading">Not just any software development company</h2>
          <p className="main-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur quam distinctio reiciendis sequi. Possimus qui reiciendis nisi quidem modi odio. Voluptatem in praesentium at exercitationem asperiores consequuntur velit labore.</p>

          <div className="text-sub-banner">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae animi ipsam consectetur incidunt obcaecati praesentium fugiat officiis fugit eveniet consequatur non pariatur omnis esse recusandae aspernatur commodi tempora impedit laboriosam, repellat qui, nobis accusantium doloribus? Perspiciatis quam ipsum quaerat esse?</p>
            <p className="quote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusamus voluptatibus officiis mollitia inventore, labore repudiandae quo ipsam sunt ab.</p>
            <span className="quote-author">- Quote Author</span>
          </div>

      </section>

      {/* Text Banner Section Ends Here */}













      {/* Tech Stack Timeline Section Starts Here */}


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


      {/* Tech Stack Timeline section ends here */}

    </>

  )
}

export default Home;