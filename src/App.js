import React from "react";

// Importation des composants de page
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Portfolio from "./component/Portfolio.jsx";
import Contact from "./component/Contact.jsx";
import Navigation from "./component/Navigation.jsx";

// Importation des styles globaux
import "./App.css";

// Composant principal de l'application
function App() {
  return (
    <div>
      {/* Le composant Navigation est affiché sur toutes les pages car il est en dehors du composant Routes */}
      <Navigation />

      {/* Le contenu principal de la page qui changera en fonction de l'URL */}
      <main className="content-wrap">
        <Home />
        <Portfolio />
        <Contact />
        <About />
      </main>
    </div>
  );
}

export default App;
