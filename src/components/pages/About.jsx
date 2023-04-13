import React from 'react'
import '../../styles/pages/About.css'
import Profile from "../../assets/images/profile.jpg";

function About() {
  return (
    <div className='container'>
        <h1 className='about-title'>About Me</h1>
          <img src={Profile} alt="profile" className="imagen-profile" />
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
  )
}

export default About
