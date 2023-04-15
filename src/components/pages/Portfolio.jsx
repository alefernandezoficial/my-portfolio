import React from "react";

import "../../styles/pages/Portfolio.css";

import SitioWeb from "../../assets/icons/sitioweb.png";

function Portfolio() {
  return (
    <div class="container">
      <h1 className="portfolio-titulo">Portfolio</h1>
      
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img src={SitioWeb} class="card-img-top" alt="sitioWeb" />
            <div class="card-body">
              <div class="clearfix mb-3">
                <span class="float-start badge rounded-pill bg-primary">
                  E-Commerce Website
                </span>
                <span class="float-end price-hp">SickGamers</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/my-ecommerce" class="btn btn-warning">
                  Visitar
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
                  Hamburguesas Website
                </span>
                <span class="float-end price-hp">GoatBurger</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/my-goatburger" class="btn btn-warning">
                  Visitar
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
                  Vinoteca Website
                </span>
                <span class="float-end price-hp">Vinoteca</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <a href="/my-goatburger" class="btn btn-warning">
                  Visitar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Portfolio;
