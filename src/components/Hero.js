import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>I'm <span className="highlight">Aggelos</span>,<br/>Visual Artist</h1>
        <p>Creating meaningful experiences through visual storytelling and artistic expression.</p>
        <a href="#portfolio" className="btn">View My Work</a>
      </div>
      <img src="/images/hero/hero-bg.jpg" alt="Aggelos' Artwork" className="hero-image" />
    </section>
  );
};

export default Hero;