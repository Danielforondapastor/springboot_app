import React, { useRef } from 'react';

const bgUrl = 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=1200&q=80';

const FondoInteractivo = ({ children }) => {
  const bgRef = useRef(null);

  const handleMouseMove = () => {
    if (bgRef.current) {
      bgRef.current.style.filter = 'brightness(1.1) blur(1px)';
      bgRef.current.style.transition = 'filter 0.3s';
    }
  };

  const handleMouseLeave = () => {
    if (bgRef.current) {
      bgRef.current.style.filter = 'brightness(0.7) blur(3px)';
      bgRef.current.style.transition = 'filter 0.3s';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={bgRef}
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) blur(3px)',
          transition: 'filter 0.3s',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default FondoInteractivo;
