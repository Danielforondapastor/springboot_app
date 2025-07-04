import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100vw',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(30,40,60,0.92)',
    color: '#fff',
    boxShadow: '0 -2px 8px rgba(25,118,210,0.13)',
    padding: '18px 0 14px 0',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '1.05rem',
    letterSpacing: 1,
    position: 'relative',
    margin: 0,
    borderTop: '1.5px solid rgba(255,255,255,0.13)',
    fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    zIndex: 10
  }}>
    © 2025 GymAi - Todos los derechos reservados
  </footer>
);

export default Footer;
