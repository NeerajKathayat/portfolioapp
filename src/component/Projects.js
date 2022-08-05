import React from 'react'
import './Projects.css'
import img1 from './img1.jpeg'
import Carousel from 'react-elastic-carousel'
import Tilt from 'react-vanilla-tilt'

export default function Projects() {
  const breakPoints= [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1},
    { width: 968, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div>
      <div className="Project" id='project'>
          <h1 data-aos="fade-down">My Projects</h1>
          <p data-aos="fade-down" className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est quos odio, laudantium esse nihil suscipit earum laboriosam et voluptas, tempore quisquam assumenda totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro illo ipsum sed officia, quia repudiandae animi fugit facilis autem atque, doloribus perspiciatis?</p>
        <div data-aos="fade-down" className="container">
         
          <Carousel breakPoints={breakPoints} >
          <Tilt className='ala' style={{width:'471px',height:'531px',marginBottom:'38px'}}>
             <div className="Card">
              <img src={img1} alt=""/>
              <h3>News WebApp</h3>
              <p >It's News App that fetch the Latest News from the News API.We have different News Category as per User Interest can watch.</p>
              </div>
              </Tilt>
           
              
              <div className="Card">Hello</div>
              <div className="Card">Hello</div>
              <div className="Card">Hello</div>
              <div className="Card">Hello</div>
              <div className="Card">Hello</div>
              <div className="Card">Hello</div>
               <div className="Card" >Hello</div>
          </Carousel>
         
        </div>
      </div>
    </div>
  )
}
