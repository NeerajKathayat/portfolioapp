import React from 'react'
import './Projects.css'
import img1 from './img1.jpeg'
import img2 from './Traker.jpeg'
import Carousel from 'react-elastic-carousel'
import img3 from './Weather.jpeg'
import img4 from './Music.jpeg'
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
          <p data-aos="fade-down" className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est quos odio, laudantium esse nihil suscipit earum laboriosam et voluptas, tempore quisquam assumenda totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro illo ipsum sed officia, quia repudiandae animi fugit facilis autem atque, doloribus perspiciatis?</p>
        <div data-aos="fade-down" className="container">
         
          <Carousel className='carousel' breakPoints={breakPoints}  >
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
