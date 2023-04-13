import React from "react";

import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
        <div class="footer-container">
          <div class="footer-info">
            <h3>Alejandro Fernandez</h3>
            <p>Diseñador y Desarrollador Web</p>
            <p>Granadero Baigorria, Santa Fe, ARGENTINA</p>
            <div class="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div class="footer-services">
            <h3>Servicios</h3>
            <ul>
              <li>Diseño Web</li>
              <li>Desarrollo Front-end</li>
              <li>Desarrollo Back-end</li>
              <li>Optimización de sitios web</li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
