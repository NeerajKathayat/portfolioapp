import React, { Component } from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import Typewritter from "typewriter-effect"
import Resume from './Resume.pdf'
import DP from './DP.jpg'
import Tilt from 'react-vanilla-tilt'
export default class Intro extends Component {

  render() {
    return (
        <>
      <div className='Intro'>
        <div className="name">
            <p>Hello</p>
            <h1><Typewritter options={{strings:["I'm Neeraj Kathayat","I'm Full Stack Developer"],loop:true,autoStart:true}}/>
            
            </h1>
            <p className="details"> 
            A motivated Developer Fresher adept at problem-solving, eager to contribute technical skills for organizational growth.
            </p>
            <div className="smg-btn">
                <a href={Resume} className="cv-btn" download={Resume} >Download CV</a>
                <Link to="contact" className='cv-btn'>Contact Me</Link>
            </div>
        </div>
        <Tilt style={{padding:'0', borderRadius:'50%'}}>
        <div className="Dp">
       <img src={DP} alt="" />
        </div>
        </Tilt>
      </div>
      </>
    )
  }
}
