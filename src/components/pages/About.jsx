import React from "react";
import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

import "../../styles/pages/About.css";

import htmlIcon from "../../assets/icons/html5.png";
import cssIcon from "../../assets/icons/CSS5.png";
import javaIcon from "../../assets/icons/javascript.png";
import reactIcon from "../../assets/icons/Reactjs.png";
import bootIcon from "../../assets/icons/bootstrap.png";
import wordIcon from "../../assets/icons/wordpress.png";

function About() {

  return (
    <Fade bottom>
    <div className="container">
      <h1 className="about-title">Sobre mi</h1>
      <div className="container-info-profile">
        <p>
          Hola, me llamo Alejandro Fernandez y soy desarrollador, diseñador y
          programador.

          En mi tiempo libre disfruto de aprender nuevos lenguajes de
          programacion. Siempre con ideas para mejorar el rendimiento
          de mis paginas web.

          Si estas interesado en trabajar conmigo, no dudes en enviarme un email
          o contactarme por medio de mis redes sociales o por aqui mismo en la
          seccion <Link to="/contact">Contacto.</Link>
        </p>
      </div>
      <hr />

      <div className="card-container">
        <div class="card-about">
          <div class="icon">
            <img src={htmlIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">HTML</p>
          <p class="text">HyperText Markup Language</p>
        </div>

        <div class="card-about">
          <div class="icon">
            <img src={cssIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">CSS</p>
          <p class="text">Cascading Style Sheets</p>
        </div>

        <div class="card-about">
          <div class="icon">
            <img src={javaIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">JavaScript</p>
          <p class="text">
            lightweight, interpreted, or just-in-time compiled programming
            language
          </p>
        </div>

        <div class="card-about">
          <div class="icon">
            <img src={reactIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">ReactJS</p>
          <p class="text">
            front-end JavaScript library for building user interfaces based on
            components
          </p>
        </div>

        <div class="card-about">
          <div class="icon">
            <img src={bootIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">BootStrap</p>
          <p class="text">
            {" "}
            front-end development framework for the creation of websites and web
            apps
          </p>
        </div>

        <div class="card-about">
          <div class="icon">
            <img src={wordIcon} alt="logohtml" className="imgIcon"></img>
          </div>
          <p class="title">Wordpress</p>
          <p class="text">website creation platform</p>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default About;
