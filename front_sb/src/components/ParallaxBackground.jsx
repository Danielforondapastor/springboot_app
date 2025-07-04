import React, { useRef, useState } from 'react';

const bgUrl = '/gym-bg.jpg';

// Efecto parallax suave: capa encima de la imagen que se mueve ligeramente con el ratón
const ParallaxBackground = ({ children }) => {
  const overlayRef = useRef(null);
  const bgRef = useRef(null);
  const [drop, setDrop] = useState({ show: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = bgRef.current.getBoundingClientRect();
    setDrop({
      show: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    const overlayRect = overlayRef.current.getBoundingClientRect();
    const x =
      ((e.clientX - overlayRect.left) / overlayRect.width - 0.5) * 20; // rango -10 a 10
    const y =
      ((e.clientY - overlayRect.top) / overlayRect.height - 0.5) * 20;
    overlayRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    setDrop({ ...drop, show: false });
    overlayRef.current.style.transform = 'translate(0,0)';
  };

  return (
    <div
      ref={bgRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
        background: `url(${bgUrl}) center/cover no-repeat fixed`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Overlay parallax encima de la imagen */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'auto',
          zIndex: 1,
          background:
            'radial-gradient(circle at 60% 40%, rgba(144,202,249,0.13) 0%, rgba(36,44,60,0.08) 80%, transparent 100%)',
          transition: 'transform 0.3s cubic-bezier(.4,2,.3,1)',
        }}
      />
      {drop.show && (
        <div
          style={{
            position: 'absolute',
            left: drop.x - 210,
            top: drop.y - 210,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: `url(${bgUrl}) center/cover no-repeat`,
            backgroundSize: '130%',
            filter: 'blur(14px) brightness(1.18)',
            opacity: 0.38,
            zIndex: 1,
            pointerEvents: 'none',
            boxShadow: '0 8px 32px rgba(25,118,210,0.10)',
            transition: 'left 0.18s, top 0.18s, opacity 0.4s',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default ParallaxBackground;
