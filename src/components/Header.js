import React from 'react';

const Header = () => {
  return (
	<header>
		<div className='header-img'>
			<img src='image/header.svg' alt='Header'/>
		</div>
		<nav>
			<div className='company-name'>
				Fictional
			</div>
			<div className='menu'>
				<a href="#hero">Home</a>
				<a href="#about">About</a>
				<a href="#product">Product</a>
				<a href="#testimonials">Testimonials</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	</header>
  );
};

export default Header;
