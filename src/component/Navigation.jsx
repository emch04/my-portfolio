import React, { useState } from "react";
import { Link } from "react-scroll";
import "./css/Navigation.css";

// Composant de la barre de navigation
function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    // Utilisation de la barre de navigation Bootstrap.
    // La classe `navbar-expand-lg` a été retirée pour que la navigation
    // soit toujours réduite dans un menu "hamburger", peu importe la taille de l'écran.
    // navbar-dark : thème sombre pour la barre de navigation.
    // navbar-custom-black : classe personnalisée pour un fond noir pur.
    <nav className="navbar navbar-dark navbar-custom-black">
      <div className="container-fluid">
        {/* Lien de la marque (logo/titre) */}
        {/*
          Le composant Link de react-scroll.
          to="home" : l'ID de la section vers laquelle défiler.
          smooth={true} : active le défilement fluide.
          duration={500} : durée de l'animation en ms.
          onClick={closeMenu} : ferme le menu mobile après un clic.
        */}
        <Link
          className="navbar-brand"
          to="home"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Mon Portfolio
        </Link>

        {/* Bouton pour le menu hamburger sur les petits écrans */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conteneur pour les liens de navigation qui sera réduit sur les petits écrans */}
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          {/* Liste des liens de navigation */}
          {/* ms-auto : aligne les liens à droite */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                onClick={closeMenu}
              >
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
