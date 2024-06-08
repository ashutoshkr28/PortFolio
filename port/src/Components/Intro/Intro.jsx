import React from 'react'
import './intro.css'
import bg from '../../assets/ashu1pn.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">i'm <span className="introName">Ashu</span> <br />Frontend Developer</span>
            <p className="introPara">i am a skilled Frontend Developer.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me"  className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src= {bg} alt="profile" className='bg' />
      </section>
    </>
  )
}

export default Intro
