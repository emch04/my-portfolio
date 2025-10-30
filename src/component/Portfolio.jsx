import React from "react";
import "./css/Portfolio.css";

// Composant pour la page "Portfolio"
const Portfolio = () => {
  return (
    <div id="portfolio" className="section-container container">
      <div className="glass-effect">
        <h1 className="text-center">Mes projets</h1>
        <p className="text-center">This is the portfolio page</p>
        <div className="progress " style={{ height: "5px", width: "70%" }}>
          <div className="progress-bar " style={{ width: "100%" }}></div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
          <div className="col">
            <div className="card">
              <img
                src="../Assets/projets.jpeg"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../Assets/projet1.jpeg"
                className="card-img-top"
                alt="projet 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
