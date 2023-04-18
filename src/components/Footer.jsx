import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";


import { Tooltip } from "bootstrap";

function Footer() {
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
    <footer class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Alejandro Fernandez Oficial</h5>
            <p><span class="badge text-bg-info">Desarrollador, Diseñador y Programador Web</span></p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Enlaces útiles</h5>
            <ul class="list-unstyled">
              <li>
                <Link to="/"><i class="bi bi-house-fill"></i> Inicio</Link>
              </li>
              <li>
                <Link to="/about"><i class="bi bi-person-vcard-fill"></i> Acerca de mi</Link>
              </li>
              <li>
                <Link to="/services"><i class="bi bi-pc"></i> Servicios</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">Contacto</h5>
            <ul class="list-unstyled">
              <li>
              <i class="bi bi-envelope-at"></i> <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=alefernandezoficial@gmail.com">Enviar email</Link>

              </li>
              <li>
                <i class="bi bi-telephone"></i> <Link to="https://wa.me/3412758775">Enviar whatsapp</Link>
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
                  <i
                    class="bi bi-twitter"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Twitter"
                  ></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.facebook.com/alejandro.jsk.fernandez"
                  class="social-link"
                >
                  <i
                    class="bi bi-facebook"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Facebook"
                  ></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/ale.jsk" class="social-link">
                  <i
                    class="bi bi-instagram"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Instagram"
                  ></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/alefernandezoficial/"
                  class="social-link"
                >
                  <i
                    class="bi bi-linkedin"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Linkedin"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-3">
        <div class="container text-center">
          <p class="mb-0">
          <span class="badge text-bg-info">&copy; Alejandro Fernandez</span> - 2023 Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
