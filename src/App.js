import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

//Estructura y Navegacion
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

//DarkMode
import "./styles/DarkMode.css";

//Paginacion
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Certificated from "./components/pages/Certificated";

//ErrorPage
import ErrorPage from "./components/pages/ErrorPage";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div>
      <div className={isDarkMode ? "dark" : ""}>
      <button className="darkmodebutton" onClick={toggleDarkMode}>
        {isDarkMode ? <i class="bi bi-sun-fill"></i> : <i class="bi bi-moon-stars-fill"></i>}
      </button>

        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/myapp-2" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificated" element={<Certificated />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
