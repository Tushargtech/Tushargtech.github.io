import React from 'react';


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn from the future: Explore our AI-powered courses</h1>
        <input type="text" placeholder="Search Your Favourite Course Today." />
        <button>Search</button>
      </div>
      <div className="hero-image">
        <img src="/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;