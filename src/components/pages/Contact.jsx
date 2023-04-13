import React from 'react';
import '../../styles/pages/Contact.css'

function Contact() {
  return (
    <section>
      <div>
        <h2>Contacto</h2>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
