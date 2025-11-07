import React from 'react';

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-field">
          <div className="search-field-label">Dónde</div>
          <div className="search-field-placeholder">Explora destinos</div>
        </div>

        <div className="search-divider"></div>

        <div className="search-field">
          <div className="search-field-label">Check-in</div>
          <div className="search-field-placeholder">Agrega fech...</div>
        </div>

        <div className="search-divider"></div>

        <div className="search-field">
          <div className="search-field-label">Check-out</div>
          <div className="search-field-placeholder">Agrega fech...</div>
        </div>

        <div className="search-divider"></div>

        <div className="search-field search-field-last">
          <div className="search-field-label">Quién</div>
          <div className="search-field-placeholder">¿Cuántos?</div>
        </div>

        <button className="search-button">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="search-icon"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
