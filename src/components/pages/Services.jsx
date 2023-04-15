import React from "react";

import "../../styles/pages/Services.css";

import SitioWeb from "../../assets/icons/sitioweb.png";

function Services() {
  return (
    <div className="container">
      <h1 className="services-titulo">Services</h1>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img src={SitioWeb} class="card-img-top" alt="sitioWeb" />
            <div class="card-body">
              <div class="clearfix mb-3">
                <span class="float-start badge rounded-pill bg-primary">
                  Website 1 page UX/UI
                </span>
                <span class="float-end price-hp">49.95$</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/contact" class="btn btn-warning">
                  Comprar
                </a>
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
                <span class="float-end price-hp">99.80$</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/contact" class="btn btn-warning">
                  Comprar
                </a>
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
                <span class="float-end price-hp">24.99$</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/contact" class="btn btn-warning">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
