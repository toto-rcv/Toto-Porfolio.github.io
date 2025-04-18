import React from 'react';
import "./Header.css"; // Importa el archivo CSS para estilos
function Header() {
  return (
    <header>
      <nav>
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;