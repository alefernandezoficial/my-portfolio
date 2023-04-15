import React from "react";

import "../styles/Header.css";

import logoAle from "../assets/images/alejandro-fernandez.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="card">
        <img src={logoAle} className="alefernandez-img-top" alt="logoAle" />
      </div>

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" aria-current="page">
            <Link to="/"><i class="bi bi-house" data-bs-toggle="tooltip" title="Inicio"></i></Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/about"><i class="bi bi-file-person" data-bs-toggle="tooltip" title="Sobre mi"></i></Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/portfolio"><i class="bi bi-pc-display" data-bs-toggle="tooltip" title="Portfolio"></i></Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/certificated"><i class="bi bi-patch-check" data-bs-toggle="tooltip" title="Certificados"></i></Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/contact"><i class="bi bi-envelope" data-bs-toggle="tooltip" title="Contacto"></i></Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <Link to="/services"><i class="bi bi-person-workspace" data-bs-toggle="tooltip" title="Servicios"></i></Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
