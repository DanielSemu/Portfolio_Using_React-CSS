                      
import React from 'react'
import './contact.css'
const Contact = () => {
return (    
    <section section className="contact container section" id='contact'>
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything</h3>
          <p className="contact_details">Don't like forms? Send me an Email.</p>
        </div>
        <form action="" className="contact_form">
          <div className="contact_form_group">
            <div className="contact_form_div">
            <input type="text" className="contact_form_input" placeholder='Insert Your Name'/>
            </div>
            <div className="contact_form_div">
            <input type="email" className="contact_form_input" placeholder='Insert Your Email'/>
            </div>
          </div>
            <div className="contact_form_div">
            <input type="text" className="contact_form_input" placeholder='Insert Your subject'/>
            </div>
            <div className="contact_form_div">
            <textarea name="" id="" cols="30" rows="10" className="contact_form_input contact_form_area"
            placeholder='Insert your Message'></textarea>
            </div>
            
            <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
    
    )
  }
  export default Contact
 
  