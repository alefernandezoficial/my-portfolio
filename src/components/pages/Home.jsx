import React from "react";

import Profile from "../../assets/images/profile-entidad.png";
import Cover from "../../assets/images/profile-cover.png";
import Nombre from "../../assets/images/alejandro-fernandez.png";

import "../../styles/pages/Home.css";

function Home() {
  return (
    <div className="container">
      <h1 className="home-title">Home</h1>

      <div className="container-card-presentation">
        <div class="card-profile">
          <div class="wrapper">
            <img src={Cover} class="cover-image" alt="coverImg" />
          </div>
          <img src={Nombre} class="title" alt="nameImg"/>
          <img src={Profile} class="character" alt="profileImg" />
        </div>
      </div>

      <p className="home-parrafo">
        Aca podras encontrar toda la informacion de mis conocimientos tanto como
        Programador como Diseñador. Tengo conocimientos de Front-End HTML, CSS,
        JavaScript, BootStrap, ReactJS SupaBase y MySQL como base de datos en
        Back-End.
      </p>
    </div>
  );
}

export default Home;
