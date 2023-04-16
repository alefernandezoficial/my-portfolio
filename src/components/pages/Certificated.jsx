import React from 'react';

import { Fade } from 'react-reveal';

import pdfCursos from "../../assets/pdf/cursos.pdf";

import "../../styles/pages/Certificated.css";

function Certificated() {
  return (
    <Fade>
    <div>
      <h1 className='certificated-title'>Certificados Oficiales</h1>
    <div className='container d-flex justify-content-center align-items-center'>
      <iframe title='Certificados' src={pdfCursos} height={600} width={700}></iframe>
    </div>
    </div>
    </Fade>
  )
}

export default Certificated
