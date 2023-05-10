import React, { useState, useEffect } from 'react';

import "../styles/Header.css";

import logoAle from "../assets/images/alejandro-fernandez.png";

import { Link } from "react-router-dom";

import HeaderVideo from "../assets/video/header.mp4";

import { TypeAnimation } from "react-type-animation";

function Header() {

  return (
    <div>
      <header id="header">
        <div class="overlay"></div>
        <video autoPlay="play" muted="muted" loop="loop">
          <source src={HeaderVideo} type="video/mp4" />
        </video>

        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <img
                src={logoAle}
                className="alefernandez-img-top"
                alt="logoAle"
              />
              <TypeAnimation
                sequence={[
                  "Diseñador", // Types 'One'
                  1000, // Waits 1s
                  "Desarrollador", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Programador", // Types 'Three' without deleting 'Two'
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em' }}
              />
            </div>
          </div>
        </div>
      </header>

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" aria-current="page">
            <Link to="/">
              <i
                class="bi bi-house"
                data-bs-toggle="tooltip"
                title="Inicio"
              ></i>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/about">
              <i
                class="bi bi-file-person"
                data-bs-toggle="tooltip"
                title="Sobre mi"
              ></i>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/portfolio">
              <i
                class="bi bi-pc-display"
                data-bs-toggle="tooltip"
                title="Portfolio"
              ></i>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/certificated">
              <i
                class="bi bi-patch-check"
                data-bs-toggle="tooltip"
                title="Certificados"
              ></i>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/contact">
              <i
                class="bi bi-envelope"
                data-bs-toggle="tooltip"
                title="Contacto"
              ></i>
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/services">
              <i
                class="bi bi-person-workspace"
                data-bs-toggle="tooltip"
                title="Servicios"
              ></i>
            </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
