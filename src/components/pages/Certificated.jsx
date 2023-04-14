import React from 'react';

import pdfCursos from "../../assets/pdf/cursos.pdf";

import "../../styles/pages/Certificated.css";

function Certificated() {
  return (
    <div className='container'>
      <h1 className='certificated-title'>Certificados Oficiales</h1>
      <iframe title='Certificados' src={pdfCursos} height={600} width={700}></iframe>
    </div>
  )
}

export default Certificated
