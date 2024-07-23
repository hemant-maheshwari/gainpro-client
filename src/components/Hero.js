import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to Fictional Company</h1>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper nibh sed est tincidunt tristique ut in lorem. Nunc pharetra posuere est, at commodo elit pulvinar eget. Aliquam faucibus neque in erat volutpat venenatis. Nulla cursus odio sem, a consequat est iaculis ac. Nulla vitae libero tempor, consectetur tellus id, gravida est. Morbi efficitur, ante non consequat dapibus, nisi ante faucibus tortor, nec auctor mauris ligula sed ipsum. Nam vulputate mauris sed semper tempor.</p>
      </div>
      <div className="hero-img">
        <img src="image/gear.png" alt='Gear'/>
      </div>
    </section>
  );
};

export default Hero;
