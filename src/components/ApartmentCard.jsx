import React, { useState } from 'react';

export default function ApartmentCard({ apartment }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="card border-0 apartment-card">
            <div className="position-relative">
                <img 
                    src={apartment.photo ? `/src/assets/img/${apartment.photo}`: ''} 
                    className="card-img-top apartment-image" 
                    alt={apartment.name}
                />
                <span className="badge bg-white text-dark position-absolute top-badge">
                    Favorito entre huéspedes
                </span>
                <button 
                    className="btn btn-favorite position-absolute"
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <svg 
                        viewBox="0 0 32 32" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="presentation" 
                        focusable="false"
                        className={isFavorite ? 'filled' : ''}
                    >
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                </button>
            </div>
            
            <div className="card-body p-0 pt-2">
                <h6 className="card-title apartment-title mb-1">{apartment.name}</h6>
                <p className="card-text mb-1">
                    <strong>${apartment.valor} COP</strong> {apartment.tiempo}
                </p>
                <p className="card-text text-muted mb-0">
                    <svg 
                        viewBox="0 0 32 32" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="presentation" 
                        focusable="false"
                        style={{width: '12px', height: '12px', fill: 'currentColor', marginRight: '2px'}}
                    >
                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                    </svg>
                    {apartment.estrellas}
                </p>
            </div>
        </div>
    );
}