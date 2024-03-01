import React from 'react'
import './Projects.css'
import img1 from './img1.jpeg'
import img2 from './Traker.jpeg'
import Carousel from 'react-elastic-carousel'
import img3 from './Weather.jpeg'
import img4 from './Music.jpeg'
import img5 from './NFT.jpg'
import Tilt from 'react-vanilla-tilt'

export default function Projects() {
  const breakPoints= [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1},
    { width: 968, itemsToShow: 2 },
    { width: 1500, itemsToShow: 3 },
  ];
  return (
    <div>
      <div className="Project" id='project'>
          <h1 data-aos="fade-down">My Projects</h1>
          <p data-aos="fade-down" className='para'>"Welcome to my Projects Showcase! Here you'll find a curated selection of my latest web applications, highlighting my passion for coding and innovation. Dive into each project to discover the solutions I've crafted and the technologies powering them."</p>
        <div data-aos="fade-down" className="container">
         
          <Carousel className='carousel' breakPoints={breakPoints}  >
             <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img5} alt=""/>
              <h3>NFT MarketPlace</h3>
              <p>It is an BlockChain Based Project.I have Used Ethereum Blockchain. You can Upload Your Digital ArtWork on this Platform and Create it's NFT to Safe your OwnerShip.</p>
              </div>
              </Tilt>
             <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img1} alt=""/>
              <h3>News WebApp</h3>
              <p >It's News App that fetch the Latest News from the News API.We have different News Category as per User Interest can watch.</p>
              </div>
              </Tilt>
              <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img2} alt=""/>
              <h3>Expense Tracker</h3>
              <p >It's Expense Tracker App that can track your all daily Expenses and Income.</p>
              </div>
              </Tilt>
              <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img3} alt=""/>
              <h3>Weather webApp</h3>
              <p >It's a Weather App that shows Live Weather Condition of all countries.</p>
              </div>
              </Tilt>
              <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img4} alt=""/>
             <h3>MusicPlayer WebApp</h3>
              <p >It's MusicPlayer App that can Play the Music of your custom Music Gallery.</p>
              </div>
              </Tilt>
           
              
          </Carousel>
         
        </div>
      </div>
    </div>
  )
}
