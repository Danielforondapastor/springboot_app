import React, { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (headerRef.current) {
        if (currentScroll > 40 && currentScroll > lastScroll) {
          headerRef.current.style.opacity = '0.2';
          headerRef.current.style.transition = 'opacity 0.4s';
        } else {
          headerRef.current.style.opacity = '1';
          headerRef.current.style.transition = 'opacity 0.4s';
        }
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'rgba(30,40,60,0.82)', // gris azulado translúcido
      color: '#fff',
      boxShadow: '0 4px 16px rgba(25, 118, 210, 0.13)',
      padding: '12px 0 10px 0', // menos alto
      textAlign: 'center',
      fontWeight: 700, // menos gordo
      fontSize: '2.2rem',
      letterSpacing: 1.2,
      zIndex: 1000,
      borderBottom: '3px solid #90caf9',
      fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
      opacity: 1,
      transition: 'opacity 0.4s',
      backdropFilter: 'blur(4px)',
      borderTop: '1.5px solid rgba(255,255,255,0.13)'
    }}>
      <span style={{
        background: 'linear-gradient(90deg, #90caf9 10%, #ffb6e6 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 900,
        fontSize: '2.7rem',
        textShadow: '0 2px 16px rgba(25,118,210,0.18)',
        letterSpacing: 2,
        fontFamily: 'inherit',
        padding: '0 8px',
        borderRadius: 8,
        display: 'inline-block',
      }}>
        GymAi
      </span>
    </header>
  );
};

export default Header;
