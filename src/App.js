import React from "react";
import { Route, Routes } from "react-router-dom";

import { Fade } from "react-reveal";

//Estructura y Navegacion
import Header from "./components/Header";
import Footer from "./components/Footer";

//Paginacion
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Certificated from "./components/pages/Certificated";
import Services from "./components/pages/Services";

//ErrorPage
import ErrorPage from "./components/pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Fade>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificated" element={<Certificated />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        </Fade>
    </div>
  );
};

export default App;
