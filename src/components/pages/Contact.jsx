import React from 'react';
import '../../styles/pages/Contact.css';

import { Fade } from 'react-reveal';

function Contact() {
  return (
    <Fade bottom>
      <div className='container'>
        <h1 className='contact-title'>Contact</h1>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Tu Direccion de correo" required />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" placeholder="Tu mensaje de texto" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      </Fade>
  )
}

export default Contact
