import React from 'react'
import SkillBar from './SkillBar.js';
import './Skills.css'
export default function Skills() {


    return (
      <div>
        <section className='skills' id='skill' >
         <h1 data-aos="fade-down">My Skills</h1>
         <p data-aos="fade-down" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio repellat numquam ipsum et quos repudiandae laudantium quis molestiae.<br></br> ab dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae in impedit consequatur!</p>
          <SkillBar/> 
        </section>
      </div>
  )
}
