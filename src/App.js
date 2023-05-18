import React, { useState, useEffect, useContext } from "react";

import { Vortex } from "react-loader-spinner";

import { Route, Routes } from "react-router-dom";

import { Fade } from "react-reveal";

//Estructura y Navegacion
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

//Paginacion
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Certificated from "./components/pages/Certificated";
import Services from "./components/pages/Services";

//ErrorPage & Loader
import ErrorPage from "./components/pages/ErrorPage";
import "./styles/Loader.css";

// Darkmode
import { ThemeContext } from "./components/ThemeContext";
import "./styles/DarkMode.css";
import { FaSun, FaMoon } from "react-icons/fa";


const App = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <div>
          {isLoading ? (
            <div className="loader-wrapper">
              <Vortex
                visible={true}
                height="100"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
              />
            </div>
          ) : (
            <div className={`${darkMode ? "dark-mode" : ""}`}>
              <div className="switch-container">
                <div className="switch" onClick={toggleTheme}>
                  {darkMode ? <FaMoon /> : <FaSun />}
                </div>
              </div>
              {" "}
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
                <ChatBot/>
              </Fade>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
