import React from 'react'

import "./About.css";


export const metadata = {
  
};

function About(){
  metadata.title = "About Page"
  metadata.description = "About Description"

  return (
    <section className="about">

      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="About Us"
          />
        </div>

        <div className="about-content">
          <h2>About Us</h2>

          <p>
            Welcome to <strong>WEB PAGE</strong>. We are passionate about
            creating modern, responsive, and user-friendly websites.
            Our goal is to deliver high-quality digital solutions that
            help businesses grow online.
          </p>

          <p>
            Our team focuses on web development, UI/UX design, and
            e-commerce solutions using the latest technologies to
            provide the best user experience.
          </p>

          <button>Read More</button>
        </div>

      </div>

    </section>
  );
};

export default About;