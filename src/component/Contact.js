import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div>
      <div className="Contact" id="contact">
      <div className="content">
         <h1 data-aos="fade-down">Contact Us</h1>
         <p data-aos="fade-down">I'm excited to connect and discuss potential opportunities, collaborations, or just have a chat about tech! Let's make something awesome together.</p>
       </div>
       <div className="ContactContainer" >
        <div className="contactInfo" data-aos="fade-down">
            <div className="box">
                <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="text">
                    <h3>Address</h3>
                    <p>Village-Jasari,Jhankat<br></br>Khatima,262308<br></br>U S Nagar,Uttarakhand</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>+917668189889</p>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="text">
                    <h3>Email</h3>
                    <p>neeraj7500728999@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="contactform" data-aos="fade-down">
            <form action="https://formspree.io/f/maykwvep" method='POST'>
                <h2>Send Messages</h2>
                <div className="inputBox">
                    <input type="text" name='username' required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="email" name='Email' required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                   <textarea name="message" required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" id="" value="send" />
                </div>
            </form>
        </div>
       </div>
      </div>
    </div>
  )
}
