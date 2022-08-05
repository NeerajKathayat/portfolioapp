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
            <h1><Typewritter options={{strings:["I'm Neeraj Kathayat","I'm FrontEnd Developer"],loop:true,autoStart:true}}/>
            
            </h1>
            <p className="details"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa mollitia libero velit dolorem dicta aperiam! Esse fugiat dolor harum, repellendus magni porro sed vel dolores cumque ex? Maiores officiis voluptates dicta dolorem repudiandae!
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
