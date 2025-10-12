import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation des styles
import './index.css'; // Styles globaux personnalisés
import 'bootstrap/dist/css/bootstrap.min.css'; // Styles CSS de Bootstrap

// Importation du JavaScript de Bootstrap (pour les composants interactifs)
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Importation du composant principal de l'application
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// On récupère l'élément 'root' du DOM où l'application sera montée
const root = ReactDOM.createRoot(document.getElementById('root'));

// On rend l'application dans le 'root'
root.render(
  <React.StrictMode>
    {/*
      BrowserRouter est un composant de 'react-router-dom' qui active le routage côté client.
      Il doit englober l'ensemble de l'application pour que les routes fonctionnent.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Fonction pour mesurer la performance de l'application
reportWebVitals();