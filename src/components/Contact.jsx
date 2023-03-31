import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {toast} from 'react-toastify'


const Contact = () => {

  const notify = () => toast("You Send A Message!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm('service_nnxygbb', 'template_mecpin5', form.current, 'cBINx19cAHQPB3tBU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ahmetavci.8873@gmail.com</h5>
            <a href="mailto:ahmetavci.8873@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+31686492109</h5>
            <a href="https://api.whatsapp.com/send?phone=+31686492109" target="_blank">Send A Message</a>
          </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name='name' placeholder='Your Full Name' required/>
            <input type="text" name='email' placeholder='Your Email'  required/>
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact