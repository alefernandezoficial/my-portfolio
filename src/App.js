import React from 'react';
import { Route, Routes } from 'react-router-dom'

//Estructura y Navegacion
import Navbar from './components/Navbar';
import Header from './components/Header';

//Paginacion
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Certificated from './components/pages/Certificated';

const App = () => {
  return (
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/certificated' element={<Certificated />} />
        </Routes>
      </div>
  );
}

export default App;
