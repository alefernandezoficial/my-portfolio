import React from "react";

import "../../styles/pages/Services.css";

import { Fade } from "react-reveal";

import SitioWeb from "../../assets/icons/sitioweb.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <Fade bottom>
      <div className="container">
        <h1 className="services-titulo">Servicios</h1>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <img src={SitioWeb} class="card-img-top" alt="sitioWeb" />
              <div class="card-body">
                <div class="clearfix mb-3">
                  <span class="float-start badge rounded-pill bg-primary">
                    Website 1 page UX/UI
                  </span>
                  <span class="float-end price-hp">24.99$</span>
                </div>
                <h5 class="card-title">
                  Pagina web UX/UI simple, rapida y moderna con HTML, CSS,
                  JavaScript, ReactJS & Bootstrap especial para paginas web con
                  un punto centrado en audiencia
                </h5>
                <span class="badge text-bg-danger">
                  Mantenimiento por mes - 14.99$
                </span>
                <div class="text-center my-4">
                  <Link to="/contact" class="btn btn-warning">
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <img src={SitioWeb} class="card-img-top" alt="sitioWeb" />
              <div class="card-body">
                <div class="clearfix mb-3">
                  <span class="float-start badge rounded-pill bg-primary">
                    Website 3 pages o mas
                  </span>
                  <span class="float-end price-hp">49.99$</span>
                </div>
                <h5 class="card-title">
                  Servicio especial para empresas grandes o emprendimientos con
                  3 o mas secciones para detallar mas informacion o brindar mas
                  servicios.
                </h5>
                <span class="badge text-bg-danger">
                  Mantenimiento por mes - 14.99$
                </span>
                <div class="text-center my-4">
                  <Link to="/contact" class="btn btn-warning">
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
              <img src={SitioWeb} class="card-img-top" alt="sitioWeb" />
              <div class="card-body">
                <div class="clearfix mb-3">
                  <span class="float-start badge rounded-pill bg-primary">
                    Web Optimizacion
                  </span>
                  <span class="float-end price-hp">14.99$</span>
                </div>
                <h5 class="card-title">
                  Optimizacion de paginas web adaptadas a UX/UI para
                  presentacion profesional y dispositivos moviles.
                </h5>
                <span class="badge text-bg-danger">Pago unico</span>
                <div class="text-center my-4">
                  <Link to="/contact" class="btn btn-warning">
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Services;
