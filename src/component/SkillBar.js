import React from 'react'
import './SkillBar.css'
export default function SkillBar() {
  return (
    <div>
          <div className="skills-bar"  data-aos="fade-down">
            <div className="dsp">
            <div className="bar">
                <div className="info">
                    <span>HTML</span>
                </div>
                <div className="progress-line html"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>CSS</span>
                </div>
                <div className="progress-line CSS"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>JavaScript</span>
                </div>
                <div className="progress-line JavaScript"><span></span></div>
            </div>
            </div>
            <div className="dsp">
            <div className="bar">
                <div className="info">
                    <span>ReactJs/Redux</span>
                </div>
                <div className="progress-line ReactJs"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Node Js / Express Js</span>
                </div>
                <div className="progress-line NodeJs"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Mongodb</span>
                </div>
                <div className="progress-line Mongodb"><span></span></div>
            </div>
            
            </div>
          </div>
    </div>
  )
}
