import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
          <div className='App-header'>
            <h1 className='Rusty-text'>
              Contact Me
            </h1>
            <div className='contact-container'>
                <div className='contact-item'><img src='/github.svg' alt='github' className='contact-image' /></div>
                <div className='contact-item'><img src='/linkedin.svg' alt='linkedin' className='contact-image' /></div>
                <div className='contact-item'><img src='/email.svg' alt='email' className='contact-image' /></div>
            </div>
          </div>
        </section>
    );
};

export default Contact;