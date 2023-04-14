import React from 'react';

import '../styles/Header.css';

import logoAle from "../assets/images/alejandro-fernandez.png";

function Header() {
    return (
        <div>
            <div className="card">
                <img src={logoAle} className="alefernandez-img-top" alt="logoAle" />
            </div>
        </div>
    )
}

export default Header
