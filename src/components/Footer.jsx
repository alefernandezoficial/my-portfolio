import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Alejandro Fernandez Oficial</h5>
            <p>Desarrollador, Diseñador y Programador Web</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Enlaces útiles</h5>
            <ul class="list-unstyled">
              <li>
              <Link to="/">Inicio</Link>
              </li>
              <li>
              <Link to="/about">Acerca de mi</Link>
              </li>
              <li>
              <Link to="/services">Servicios</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Contacto</h5>
            <ul class="list-unstyled">
              <li>
                <i class="bi bi-envelope"></i> alefernandezoficial@gmail.com
              </li>
              <li>
                <i class="bi bi-telephone"></i> +54 (341) 275-8775
              </li>
              <li>
                <i class="bi bi-shop"></i> Granadero Baigorria, Santa fe,
                Argentina
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Sígueme</h5>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="https://www.twitter.com/ale_jsk" class="social-link">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.facebook.com/alejandro.jsk.fernandez"
                  class="social-link"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/ale.jsk" class="social-link">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/alefernandezoficial/"
                  class="social-link"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-3">
        <div class="container text-center">
          <p class="mb-0">
            &copy; Alejandro Fernandez - 2023 Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
