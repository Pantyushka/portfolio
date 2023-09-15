import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser'; 
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                <img src={Microsoft} alt='Client' className='clientImg'/>
                <img src={Facebook} alt='Client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' action='' ref={form} onSubmit={sendEmail}> 
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' placeholder='Your Message' rows='5' ></textarea>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <img className='link' src={FacebookIcon} alt='Facebook'></img>
                    <img className='link' src={TwitterIcon} alt='Twitter'></img>
                    <img className='link' src={YoutubeIcon} alt='Youtube'></img>
                    <img className='link' src={InstagramIcon} alt='Instagram'></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact