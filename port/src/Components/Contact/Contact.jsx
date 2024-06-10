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
            <p className="clientDesc">"I prioritize understanding my clients' unique visions and goals, ensuring each project is tailored to meet their specific needs and exceeds their expectations through innovative and user-friendly web solutions."</p>
            <div className="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Adobe} alt="client" className="clientImg" />
                <img src={Microsoft} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <span className="clientDesc">Contact me if you want to build your own website!</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>

                <input type="text" className="name" placeholder='Your Name' name = 'your_name' />
                <input type="email" className="email"  placeholder='Your Email' name= 'your_email'/>
                <textarea name="message" className='msg' rows='5' placeholder='Your Message'  ></textarea>
                <button type='submit' value= 'send' className="submitBtn">Submit</button>
                <div className="links">
                  <a href="https://www.instagram.com/ashutosh_kr28" target='_blank'>
                  <img src={Instagram} alt="" className="link" />
                  </a>
                  <a href="https://www.facebook.com/ashutosh_kr28" target='_blank'>
                  <img src={Facebook1} alt="" className="link" />
                  </a>
                    <a href="https://www.youtube.com/@ashudaadda" target='_blank'>
                    <img src={Youtube} alt="" className="link" />
                    </a>
                    <a href="https://www.twitter.com/ashutosh_kr28" target='_blank'>
                    <img src={Twitter} alt="" className="link" />
                    </a>
                    
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
