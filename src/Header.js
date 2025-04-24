import React from 'react';
import "./Header.css"; // Importa el archivo CSS para estilos
function Header() {
  return (
    <header>
      <nav>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#Sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;