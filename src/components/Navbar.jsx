import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "bootstrap";

import "../styles/NavegationBar.css";

function Navbar() {
  // Inicializamos los tooltips al montar el componente
  React.useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <i
                  class="bi bi-house"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Inicio"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i
                  class="bi bi-file-person"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Sobre Mi"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i
                  class="bi bi-envelope"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Contacto"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                <i
                  class="bi bi-pc-display"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Portfolio"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificated">
                <i
                  class="bi bi-postcard"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Certificados"
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
