import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-wrapper">
        <div className='contact-form'>
          <h2>Contact Us</h2>
          <form>
            <input type="text" id="name" name="name" placeholder='Name' required/>
            <input type="email" id="email" name="email" placeholder='Email' required/>
            <textarea id="message" name="message" placeholder='Message' required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
    </section>
  );
};

export default Contact;
