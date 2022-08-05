import React from 'react'
import './About.css'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere!
          Suscipit, obcaecati! Veritatis expedita laboriosam, delectus, quae
          dolores consequatur autem alias esse incidunt iure voluptatem! Est,
          magni eos ad repudiandae officiis vero itaque aut consequatur ipsa.
          Explicabo, non ducimus! Aliquam reiciendis ex soluta nemo repellendus?
        </p>
        <button data-aos="fade-down">More Details</button>
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
