import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Primera Columna */}
          <div className="col">
            <h1>ContadorClic</h1>
            <h2 className="list-unstyled">
              Michael Lopez - Desarrollador
            </h2>
          </div>
          
          {/* Segunda columna */}
          <div className="col">
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <li>+57 311 5135119</li>
              <li>Michael.lopez@pi.edu.co</li>
              <li>Cll 123 N° 12 - 52</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ContadorClic | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;