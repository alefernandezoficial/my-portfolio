import React  from "react";

import { Fade } from "react-reveal";

import Profile from "../../assets/images/profile-entidad.png";
import Cover from "../../assets/images/profile-cover.png";
import Nombre from "../../assets/images/alejandro-fernandez.png";

import "../../styles/pages/Home.css";

function Home() {

  return (
    <Fade bottom>
    <div className="container">
      <h1 className="home-title">Home</h1>

      <div className="container-card-presentation">
        <div class="card-profile">
          <div class="wrapper">
            <img src={Cover} class="cover-image" alt="coverImg" />
          </div>
          <img src={Nombre} class="title" alt="nameImg" />
          <img src={Profile} class="character" alt="profileImg" />
        </div>
      </div>

      <p className="home-parrafo">
        Buenos días/tardes/noches, Me complace presentarles mis servicios como
        programador, diseñador y desarrollador web. Con experiencia en HTML,
        CSS, JavaScript, ReactJS, Bootstrap, Photoshop, Canva, Wordpress,
        SupaBase y MySql, puedo ayudarle a crear una presencia en línea efectiva
        y atractiva para su empresa o proyecto. Mi objetivo es proporcionar
        soluciones web personalizadas que satisfagan sus necesidades y objetivos
        únicos. Con una atención meticulosa a los detalles, garantizo una
        experiencia de usuario fluida y optimizada que resultará en una mayor
        retención y conversión de clientes.
        <hr/>
        Además de mis habilidades en diseño
        y desarrollo web, también tengo experiencia en producción musical y
        audiovisual con Reaper y SonyVegas. Esta experiencia me ha permitido
        tener una comprensión profunda de la importancia de la calidad del
        sonido y la imagen en la creación de contenido multimedia. Si está
        buscando un profesional de confianza y dedicado para su proyecto web, no
        dude en ponerse en contacto conmigo. Estoy comprometido con la
        excelencia en cada proyecto que emprendo y estoy listo para ayudarlo a
        alcanzar sus objetivos. ¡Gracias!
      </p>
    </div>
    </Fade>
  );
}

export default Home;
