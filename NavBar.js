import React from 'react';
import LogoImg from "./img/logo.png";
import './App.css'; 
import CartWidget from './CartWidget';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>

      <ul className="nav-list">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>

      <div className="cart-section">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;