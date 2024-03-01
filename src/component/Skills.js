import React from 'react'
import SkillBar from './SkillBar.js';
import './Skills.css'
export default function Skills() {


    return (
      <div>
        <section className='skills' id='skill' >
         <h1 data-aos="fade-down">My Skills</h1>
         <p data-aos="fade-down" >In the dynamic world of software development, adaptability and versatility are key. Here are the skills that I've honed through my experiences:</p>
          <SkillBar/> 
        </section>
      </div>
  )
}
