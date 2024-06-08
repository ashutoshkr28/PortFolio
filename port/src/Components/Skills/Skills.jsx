import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
   <section id="skills">
    <span className="skillTitle">What I Do</span>
    <span className="skillDesc">I am a skilled and passionate web development.</span>
    <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React js</h2>
            <p>this is react js</p>
          </div>
        </div>

           <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>this is javascript</p>
          </div>
        </div>

           <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML/CSS</h2>
            <p>this is ui design</p>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Skills
