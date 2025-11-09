import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="airbnb-footer">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Column 1: Soporte */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h6>Soporte</h6>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Lucha contra la discriminación</a></li>
              <li><a href="#">Apoyo a la discapacidad</a></li>
              <li><a href="#">Opciones de cancelación</a></li>
              <li><a href="#">Denuncia problemas del barrio</a></li>
            </ul>
          </div>

          {/* Column 2: Anfitrión */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h6>Anfitrión</h6>
            <ul>
              <li><a href="#">Pon tu espacio en Airbnb</a></li>
              <li><a href="#">AirCover para anfitriones</a></li>
              <li><a href="#">Recursos para anfitriones</a></li>
              <li><a href="#">Foro de la comunidad</a></li>
              <li><a href="#">Anfitrión responsable</a></li>
            </ul>
          </div>

          {/* Column 3: Airbnb */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h6>Airbnb</h6>
            <ul>
              <li><a href="#">Sala de prensa</a></li>
              <li><a href="#">Nuevas funciones</a></li>
              <li><a href="#">Empleo</a></li>
              <li><a href="#">Inversores</a></li>
              <li><a href="#">Airbnb.org: alojamiento de emergencia</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Side: Copyright & Links */}
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <div className="d-flex flex-wrap align-items-center footer-bottom-text">
                <span>© 2024 Airbnb, Inc.</span>
                <span>·</span>
                <a href="#">Privacidad</a>
                <span>·</span>
                <a href="#">Términos</a>
                <span>·</span>
                <a href="#">Mapa del sitio</a>
                <span>·</span>
                <a href="#">Datos de la empresa</a>
              </div>
            </div>

            {/* Right Side: Language, Currency & Social */}
            <div className="col-lg-6 col-12">
              <div className="d-flex align-items-center justify-content-lg-end gap-3 flex-wrap">
                
                {/* Language Selector */}
                <button className="footer-btn">
                  <Globe size={16} />
                  <span>Español (CO)</span>
                </button>

                {/* Currency Selector */}
                <button className="footer-btn">
                  <span>$ COP</span>
                </button>

                {/* Social Icons */}
                <div className="d-flex gap-2">
                  <button className="footer-social-icon" aria-label="Facebook">
                    <Facebook size={18} />
                  </button>
                  <button className="footer-social-icon" aria-label="Twitter">
                    <Twitter size={18} />
                  </button>
                  <button className="footer-social-icon" aria-label="Instagram">
                    <Instagram size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
