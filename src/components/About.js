import React from 'react';
import { GoInfo } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <div className="container about-wrapper">
        <div className='info-icon'>
          <GoInfo className='icon'/>
        </div>
        <div className='main-content'>
          <h2>About Us</h2>
          <p>Pellentesque ut erat consequat, bibendum lectus non, tempus leo. Donec imperdiet magna eget ipsum mattis pharetra. Sed sed justo convallis, ultrices ipsum a, vehicula quam. Etiam imperdiet justo vel augue vehicula, ut hendrerit sem porttitor. Etiam lorem mi, pulvinar faucibus iaculis vel, consequat a nunc. Etiam ut cursus purus. Vivamus bibendum dictum vulputate.
            Sed eleifend luctus neque, non pretium nisl commodo eu. Aenean egestas eu turpis in venenatis. Donec tincidunt enim quis neque eleifend aliquam. In suscipit viverra elit, a volutpat eros venenatis sed. Integer ante orci, dapibus ac libero nec, scelerisque efficitur arcu. Nullam suscipit diam at ultrices feugiat. In cursus nisi eu sem molestie, vel venenatis odio scelerisque. Maecenas molestie rutrum tortor, porttitor volutpat lacus suscipit id. Curabitur mattis urna quis pretium iaculis. Nulla id mauris dictum, ullamcorper magna elementum, tempor lectus. Cras purus metus, eleifend eget orci vel, viverra faucibus elit. Nulla non ultrices velit, vitae sodales velit. Donec pharetra ac diam vitae accumsan. Vivamus posuere nibh imperdiet tincidunt blandit. Donec condimentum dui nec quam laoreet, nec mattis velit mattis.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
