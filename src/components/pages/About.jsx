import React from "react";
import "../../styles/pages/About.css";
import Profile from "../../assets/images/profile.jpg";

import htmlIcon from "../../assets/icons/html5.png";
import cssIcon from "../../assets/icons/CSS5.png";
import javaIcon from "../../assets/icons/javascript.png";
import reactIcon from "../../assets/icons/Reactjs.png";
import bootIcon from "../../assets/icons/bootstrap.png";
import wordIcon from "../../assets/icons/wordpress.png";


function About() {
  return (
    <div className="container">
      <h1 className="about-title">About Me</h1>
      <img src={Profile} alt="profile" className="imagen-profile" />
      <p>
        Hola, me llamo Alejandro Fernandez y soy desarrollador, diseñador y
        programador.
      </p>
      <p>
        En mi tiempo libre disfruto de aprender nuevos lenguajes de
        programacion. Siempre con ideas distinta,s para mejorar el rendimiento
        de mis paginas web.
      </p>
      <p>
        Si estas interesado en trabajar conmigo, no dudes en enviarme un email o
        contactarme por medio de mis redes sociales o por aqui mismo en la
        seccion Contacto.
      </p>
      <button className="about-btn">Contact Me</button>
      <hr />

    <div className="card-container">
      <div class="card-about">
            <div class="icon"><img src={htmlIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">HTML</p>
            <p class="text">HyperText Markup Language</p>
      </div>

      <div class="card-about">
            <div class="icon"><img src={cssIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">CSS</p>
            <p class="text">Cascading Style Sheets</p>
      </div>

      <div class="card-about">
            <div class="icon"><img src={javaIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">JavaScript</p>
            <p class="text">lightweight, interpreted, or just-in-time compiled programming language</p>
      </div>

      <div class="card-about">
            <div class="icon"><img src={reactIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">ReactJS</p>
            <p class="text">front-end JavaScript library for building user interfaces based on components</p>
      </div>

      <div class="card-about">
            <div class="icon"><img src={bootIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">BootStrap</p>
            <p class="text"> front-end development framework for the creation of websites and web apps</p>
      </div>

      <div class="card-about">
            <div class="icon"><img src={wordIcon} alt="logohtml" className="imgIcon"></img></div>
            <p class="title">Wordpress</p>
            <p class="text">website creation platform</p>
      </div>
    </div>
    </div>
  );
}

export default About;
