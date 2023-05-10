import React, { useState } from "react";
import emailjs from "emailjs-com";

import "../../styles/pages/Contact.css";

import { Fade } from "react-reveal";
import { Flip } from 'react-reveal';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si los campos están en blanco
    if (!name || !email || !message) {
      setErrorMessage("Por favor, complete todos los campos");
      return;
    }

    emailjs
      .sendForm(
        "service_ox7aili",
        "template_sbu6hcw",
        event.target,
        "rjcSU1aj5GcjvyJkL",
        { name, email, message }
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Se ha producido un error al enviar el mensaje");
        }
      );
  };

  return (
    <Fade bottom>
      <div className="container">
        <h1 className="contact-title">Contacto</h1>
        
        <div class="social-icons">
        <Flip>
          <a href="https://www.facebook.com/alejandro.jsk.fernandez">
          <i class="bi bi-facebook"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Facebook"
          ></i>
          </a>
          <a href="https://wa.me/3412758775">
          <i class="bi bi-whatsapp"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/ale.jsk">
          <i class="bi bi-instagram"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/alefernandezoficial">
          <i class="bi bi-linkedin"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Linkedin"></i>
          </a>
          <a href="https://www.github.com/alefernandezoficial">
          <i class="bi bi-github"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="GitHub"></i>
          </a>
          </Flip>
        </div>
        <hr />
        <div className="container">
        {messageSent ? (
          <div className="alert alert-success" role="alert">
            ¡Mensaje enviado correctamente!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre y apellido"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu direccion de email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tu mensaje"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
