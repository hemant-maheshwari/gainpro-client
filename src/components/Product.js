import React from 'react';

const Product = () => {
  return (
    <section id="product">
      <div className="container product-wrapper">
        <div className='main-content'>
        <h2>Our Product</h2>
        <p>Our product is designed to solve your problems efficiently and effectively.</p>
        </div>
        <div className='img-container'>
          <img src="image/banner.jpeg" alt="Product"/>
        </div>
      </div>
    </section>
  );
};

export default Product;
