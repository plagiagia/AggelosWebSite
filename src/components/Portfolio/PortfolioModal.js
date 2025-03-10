import React, { useEffect, useCallback } from 'react';

const PortfolioModal = ({ 
  isOpen, 
  artwork, 
  onClose, 
  onPrev, 
  onNext,
  hasPrev,
  hasNext
}) => {
  // Close on escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Add/remove event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  // Handle touch swipe
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };
  
  const handleSwipe = () => {
    const minSwipeDistance = 50;
    const swipeDistance = touchEnd - touchStart;
    
    if (Math.abs(swipeDistance) < minSwipeDistance) return;
    
    if (swipeDistance > 0 && hasPrev) {
      onPrev();
    } else if (swipeDistance < 0 && hasNext) {
      onNext();
    }
  };

  if (!isOpen || !artwork) return null;

  return (
    <div className={`portfolio-modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div 
          className="modal-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="modal-image-container">
            <img 
              src={artwork.fullImage || artwork.thumbnail || "/api/placeholder/800/800"} 
              alt={artwork.title} 
              className="modal-image" 
            />
          </div>
          
          <div className="modal-details">
            <h2>{artwork.title}</h2>
            <div className="modal-meta">
              <p>{artwork.meta}</p>
            </div>
            
            <div className="modal-description">
              <p>{artwork.description}</p>
            </div>
            
            <div className="modal-dimensions">
              <h3>Details</h3>
              <ul>
                <li>{artwork.dimensions}</li>
                <li>{artwork.materials}</li>
                <li>{artwork.availability}</li>
              </ul>
            </div>
            
            <div className="modal-nav">
              <button 
                className="modal-nav-btn" 
                onClick={onPrev} 
                disabled={!hasPrev}
              >
                Previous
              </button>
              <button 
                className="modal-nav-btn" 
                onClick={onNext} 
                disabled={!hasNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;