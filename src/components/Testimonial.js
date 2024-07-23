import React from 'react';
import { RxAvatar } from "react-icons/rx";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className='testimonials'>
          <div className='card'>
            <RxAvatar className='icon'/>
            <blockquote className='test'>
              <p className='review'>This product changed my life!</p>
            </blockquote>
            <div className='signature'>
            <p className='name'>John Doe</p>
            <p className='title'>Happy Customer</p>
            </div>
          </div>
          <div className='card'>
            <RxAvatar className='icon'/>
            <blockquote className='test'>
              <p className='review'>Mauris luctus in libero vel pellentesque. Curabitur iaculis tempor nunc. Vivamus quis vestibulum velit. Maecenas at efficitur lacus, sed eleifend quam. Vestibulum id venenatis enim. Curabitur sed ornare neque, id vehicula turpis. Sed efficitur rhoncus est quis molestie. Praesent rutrum ligula augue,</p>
              </blockquote>
            <div className='signature'>
              <p className='name'>Hank Moody</p>
              <p className='title'>User</p>
            </div>
          </div>
          <div className='card'>
            <RxAvatar className='icon'/>
            <blockquote className='test'>
              <p className='review'>Pellentesque ut erat consequat, bibendum lectus non, tempus leo. Donec imperdiet magna eget ipsum mattis pharetra. Sed sed justo convallis, ultrices ipsum</p>
              </blockquote>
            <div className='signature'>
            
              <p className='name'>Karen Smith</p>
              <p className='title'>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
