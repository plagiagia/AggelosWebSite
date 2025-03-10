import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-image">
            <img src="/images/about/profile.jpg" alt="Aggelos Portrait" />
          </div>
          <div className="about-content">
            <h3>My Creative Journey</h3>
            <p>I am a visual artist based in [Location], passionate about exploring the boundaries of [art medium/style]. My work examines themes of [themes/concepts], creating a dialogue between [artistic elements].</p>
            <p>With [X] years of experience in the field, I've developed a distinctive style that combines traditional techniques with contemporary approaches, resulting in artwork that is both timeless and innovative.</p>
            <p>My influences include [influences/artists], and I'm continuously inspired by [sources of inspiration]. I believe art should [artist's philosophy about art].</p>
            <a href="#contact" className="btn">Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;