import React from "react";
import { Link } from "react-scroll";
import "./css/Home.css";

// Composant pour la page d'accueil
const Home = () => {
  // On définit un objet de style en ligne pour configurer l'image de fond.
  const homeStyle = {
    // 'backgroundImage' spécifie l'image à utiliser. L'URL est relative au dossier 'public'.
    backgroundImage: `url('/Assets/emch1.png')`,
    // 'backgroundSize: "cover"' assure que l'image de fond couvre toute la surface du conteneur,
    // en étant rognée si nécessaire pour éviter la déformation.
    backgroundSize: "cover", // L'image couvre tout l'espace
    // 'backgroundPosition: "center"' centre l'image de fond horizontalement et verticalement.
    backgroundPosition: "center", // L'image est centrée
    // 'backgroundRepeat: "no-repeat"' empêche l'image de se répéter si elle est plus petite que le conteneur.
    backgroundRepeat: "no-repeat", // L'image ne se répète pas
    // 'minHeight' définit la hauteur minimale du conteneur.
    // '100vh' correspond à 100% de la hauteur de la fenêtre (viewport height).
    // On soustrait 56px, qui est une hauteur courante pour une barre de navigation,
    // pour que le contenu ne passe pas sous la barre de navigation.
    minHeight: "calc(100vh - 56px)", // Hauteur minimale (toute la vue moins la navbar)
    // 'display: "flex"' active le modèle de boîte flexible (Flexbox) pour ce conteneur.
    display: "flex",
    // 'alignItems: "center"' centre verticalement les enfants directs du conteneur flex.
    alignItems: "center", // Centre le contenu verticalement
    // 'color: "white"' définit la couleur du texte en blanc pour une meilleure lisibilité sur un fond sombre.
    color: "white", // Assure que le texte est blanc
  };

  return (
    // On applique l'objet 'homeStyle' à cette div via l'attribut 'style'.
    // C'est ce qui applique l'image de fond et les autres propriétés de style.
    <div id="home" style={homeStyle}>
      {/* Le conteneur Bootstrap centre le contenu et définit une largeur maximale. */}
      <div className="container">
        {/* Une rangée Bootstrap (row) pour organiser le contenu en colonnes. */}
        <div className="row">
          {/*
            Une colonne Bootstrap qui prend toute la largeur ('col-12').
            Elle contient tout le texte de la page d'accueil.
          */}
          <div className="col-12">
            <div className="text">
              <h1 id="text-title">Hi, I'm Emch</h1>
              <h2>Passionné de programmation</h2>
              <p className="p">Bienvenue sur mon portfolio !</p>
            </div>

            {/*
              Les composants Link de 'react-scroll' sont utilisés pour la navigation par défilement.
              Ils sont stylisés comme des boutons Bootstrap.
              'me-2' est une classe Bootstrap pour ajouter une marge à droite (margin-end).
            */}
            <div className="buttons">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="btn btn-outline-light"
              >
                Projets
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="btn btn-outline-light"
              >
                About
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                className="btn btn-outline-light"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
