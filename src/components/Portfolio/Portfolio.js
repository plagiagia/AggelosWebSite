import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import portfolioData from '../../data/portfolioData';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState(null);
  
  const handleOpenModal = (artwork) => {
    setCurrentArtwork(artwork);
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  const handlePrevArtwork = () => {
    const currentIndex = portfolioData.findIndex(item => item.id === currentArtwork.id);
    if (currentIndex > 0) {
      setCurrentArtwork(portfolioData[currentIndex - 1]);
    }
  };
  
  const handleNextArtwork = () => {
    const currentIndex = portfolioData.findIndex(item => item.id === currentArtwork.id);
    if (currentIndex < portfolioData.length - 1) {
      setCurrentArtwork(portfolioData[currentIndex + 1]);
    }
  };
  
  // Determine if we have previous/next items
  const currentIndex = currentArtwork 
    ? portfolioData.findIndex(item => item.id === currentArtwork.id) 
    : -1;
  
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < portfolioData.length - 1 && currentIndex !== -1;

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>My Work</h2>
        </div>
        
        <div className="portfolio-grid">
          {portfolioData.map(artwork => (
            <PortfolioItem 
              key={artwork.id} 
              artwork={artwork} 
              onClick={handleOpenModal} 
            />
          ))}
        </div>
        
        <PortfolioModal 
          isOpen={modalOpen}
          artwork={currentArtwork}
          onClose={handleCloseModal}
          onPrev={handlePrevArtwork}
          onNext={handleNextArtwork}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>
    </section>
  );
};

export default Portfolio;