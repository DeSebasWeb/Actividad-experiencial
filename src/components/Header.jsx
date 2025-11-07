import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger" href="#">
          Airbnb Clone
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experiencias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-danger" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
