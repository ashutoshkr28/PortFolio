import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Facebook1 from '../../assets/facebook-icon.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g3f2zj6', 'template_ixj45pn', form.current, {
            publicKey: 'f-knMQKGigY9yjdsr',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');

            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <section id="contactPage">
        <div id="client">
            <h2 className="contactPageTitle">Client</h2>
            <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, amet, </p>
            <div className="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Adobe} alt="client" className="clientImg" />
                <img src={Microsoft} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <span className="clientDesc">Lorem ipsum dolor sit amet consectetur</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>

                <input type="text" className="name" placeholder='Your Name' name = 'your_name' />
                <input type="email" className="email"  placeholder='Your Email' name= 'your_email'/>
                <textarea name="message" className='msg' rows='5' placeholder='Your Message'  ></textarea>
                <button type='submit' value= 'send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Instagram} alt="" className="link" />
                    <img src={Facebook1} alt="" className="link" />
                    <img src={Youtube} alt="" className="link" />
                    <img src={Twitter} alt="" className="link" />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
