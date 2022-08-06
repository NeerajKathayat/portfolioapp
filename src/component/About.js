import React from 'react'
import './About.css'
import { Link } from 'react-scroll'
import model from './Npic.jpg'
import Tilt from 'react-vanilla-tilt'
export default function About() {
  return (
    <div>
      <section id="about">
      <div class="about-text">
        <h1 data-aos="fade-down">About Us</h1>
        <h2 data-aos="fade-down">FrontEnd Developer</h2>
        <p data-aos="fade-down">
          Hlo Folks,I hope all Good.I am a Computer Science Student living in Dehradun City and Making a Best Version of Me for the Betterment of the Organization.I am Fond of Learning new Skills in WebDev and looking for to Explore New Technology.I'm Always Looking for an Opportunity to do better and Achieve Greatness. 
        </p>
        <div className="btn1">
        <Link data-aos="fade-down" to="skills">More Details</Link>
        </div>
      
      </div>
 <Tilt style={{padding:'0'}}>
      <div class="about-model" data-aos="fade-down">
        <img src={model} alt="" />
      </div>
      </Tilt>
    </section>
    </div>
  )
}
