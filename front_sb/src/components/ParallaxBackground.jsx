import React, { useState, useEffect, useRef } from 'react';

const bgUrl = '/gym-bg.jpg';

const ParallaxBackground = ({ children }) => {
  const [pointer, setPointer] = useState({ x: -100, y: -100 });
  const [borderShape, setBorderShape] = useState('50% 50% 40% 60% / 60% 40% 50% 50%');

  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    target.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const ease = 0.2;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        pos.current = {
          x: pos.current.x + dx * ease,
          y: pos.current.y + dy * ease,
        };
        setPointer(pos.current);

        // Deformación dinámica persistente
        const deformX = Math.max(-15, Math.min(15, dx)) * 1.2;
        const deformY = Math.max(-15, Math.min(15, dy)) * 1.2;

        const topLeft = 50 + deformY;
        const topRight = 50 - deformX;
        const bottomRight = 50 - deformY;
        const bottomLeft = 50 + deformX;

        const newShape = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${bottomLeft}% ${topLeft}% ${topRight}% ${bottomRight}%`;

        setBorderShape(newShape); // no se resetea más
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const glowSize = 160;

  return (
    <>
      {/* Fondo fijo */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          background: `url(${bgUrl}) center/cover no-repeat fixed`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      {/* Gota con forma persistente */}
      <div
        style={{
          position: 'fixed',
          top: pointer.y - glowSize / 2,
          left: pointer.x - glowSize / 2,
          width: glowSize,
          height: glowSize,
          borderRadius: borderShape,
          background: 'rgba(255, 255, 255, 0.12)',
          boxShadow: `
            inset 0 8px 15px 2px rgba(255, 255, 255, 0.25),
            0 0 15px 8px rgba(144, 202, 249, 0.15)
          `,
          backdropFilter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 0,
          willChange: 'top, left, borderRadius',
        }}
      />
      {/* Contenido */}
      <div onMouseMove={handleMouseMove} style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </>
  );
};

export default ParallaxBackground;
