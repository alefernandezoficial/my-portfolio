import React from 'react'
import '../../styles/pages/About.css'

function About() {
  return (
    <div>
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="assets/images/profile.jpg" alt="profile" className="imagen-profile" />
          <div className="about-text">
            <p>
              Hi, my name is John Doe and I'm a web developer with 5 years of
              experience. I specialize in creating responsive and user-friendly
              websites using the latest technologies such as React, Node.js, and
              MongoDB.
            </p>
            <p>
              In my free time, I enjoy learning new programming languages and
              frameworks, as well as experimenting with different design styles
              to create unique and visually appealing websites.
            </p>
            <p>
              If you're interested in working with me or have any questions,
              please don't hesitate to contact me.
            </p>
            <button className="about-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
