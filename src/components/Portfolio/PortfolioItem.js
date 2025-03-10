import React from 'react';

const PortfolioItem = ({ artwork, onClick }) => {
  return (
    <div className="portfolio-item" onClick={() => onClick(artwork)}>
      <img 
        src={artwork.thumbnail || "/api/placeholder/600/600"} 
        alt={artwork.title} 
        loading="lazy" 
      />
      <div className="portfolio-overlay">
        <h3>{artwork.title}</h3>
        <p>{artwork.category}, {artwork.year}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;