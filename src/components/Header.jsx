// src/components/Header.jsx
import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white border-bottom sticky-top">
      {/* TOP BAR */}
      <div className="container-fluid px-4 py-2 d-flex align-items-center justify-content-between topbar">
        {/* Brand */}
        <a className="d-flex align-items-center gap-2 text-decoration-none" href="#">
          {/* Logo Airbnb (SVG simple) */}
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <path fill="#FF385C" d="M16 29c5.5-3.7 11-8 11-13.8A7.2 7.2 0 0 0 19.8 8c-1.9 0-3.7.7-5 2l-1 .9-1-.9A7.1 7.1 0 0 0 4.9 8 7.2 7.2 0 0 0 2 15.2C2 21 7.5 25.3 13 29l3 2 0 0Z"/>
          </svg>
          <span className="fw-semibold fs-5 text-dark brand-text">airbnb</span>
        </a>

        {/* Main nav */}
        <ul className="nav nav-main d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span className="nav-ico me-2">🏠</span> Alojamientos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nav-ico me-2">🎈</span> Experiencias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nav-ico me-2">🔔</span> Servicios
            </a>
          </li>
        </ul>

        {/* Actions right */}
        <div className="d-flex align-items-center gap-3 actions">
          <a href="#" className="text-decoration-none text-dark d-none d-md-inline fw-semibold">
            Conviértete en anfitrión
          </a>

          {/* Globe */}
          <button className="btn btn-light rounded-circle p-2 shadow-0 border">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" fill="none" stroke="currentColor"/>
              <path d="M2.5 12h19M12 2.5c3 3.2 3 15.8 0 19M12 2.5c-3 3.2-3 15.8 0 19" fill="none" stroke="currentColor"/>
            </svg>
          </button>

          {/* Menu / User */}
          <button className="btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2 px-3 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor"/>
            </svg>
            <div className="avatar-circle">M</div>
          </button>
        </div>
      </div>

      {/* SEARCH BAR centered */}
      <div className="container d-flex justify-content-center py-3">
        <div className="search-shell">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}