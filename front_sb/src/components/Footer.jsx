import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'rgba(30,40,60,0.92)',
    color: '#fff',
    boxShadow: '0 -2px 8px rgba(25,118,210,0.13)',
    padding: '12px 0 14px 0',     // menos padding arriba para subirlo un poco
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '1.05rem',
    letterSpacing: 1,
    borderTop: '0 solid rgba(255,255,255,0.13)',
    fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    zIndex: 10,
  }}>
    © 2025 GymAi - Todos los derechos reservados
  </footer>
);

export default Footer;
