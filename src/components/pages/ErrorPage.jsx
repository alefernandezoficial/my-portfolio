import React from "react";

import Flash from "react-reveal/Flash";
import "../../styles/ErrorPage.css";

function ErrorPage() {
  return (
    <Flash>
      <div className="container">
        <div className="error-page">
          <img
            src="https://cdn.icon-icons.com/icons2/1483/PNG/512/404browser_102160.png"
            alt="Robot Icon"
            className="error-page__icon"
          />
          <h1 className="error-page__title">Lo siento, ha ocurrido un error</h1>
          <p className="error-page__description">
            Parece que algo ha ido mal. Por favor, inténtalo de nuevo más tarde.
          </p>
          <button className="error-page__button">Volver a intentar</button>
        </div>
      </div>
    </Flash>
  );
}

export default ErrorPage;
