import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

const bgUrl = '/gym-bg.jpg';

const Bloque = ({ title, text, icon }) => (
  <section style={{
    maxWidth: 600,
    margin: '40px auto',
    background: 'rgba(36, 44, 60, 0.88)',
    borderRadius: 18,
    boxShadow: '0 6px 32px rgba(25,118,210,0.10)',
    padding: '36px 28px',
    textAlign: 'center', // centrado
    fontSize: 19,
    color: '#f5f7fa',
    fontWeight: 400,
    position: 'relative',
    border: '1.5px solid rgba(144,202,249,0.10)',
    backdropFilter: 'blur(6px)',
    transition: 'box-shadow 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // centrado
    gap: 12,
    animation: 'fadein 1s',
  }}>
    {icon && <span style={{fontSize: 38, color: '#90caf9', marginBottom: 8}}>{icon}</span>}
    <div>
      <h2 style={{ color: '#90caf9', fontWeight: 700, marginBottom: 10, fontSize: 24, letterSpacing: 0.5 }}>{title}</h2>
      <p style={{lineHeight: 1.6}}>{text}</p>
    </div>
  </section>
);

const App = () => {
  const [drop, setDrop] = useState({ show: false, x: 0, y: 0 });

  return (
    <ParallaxBackground>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        padding: '0 12px',
        position: 'relative',
        zIndex: 2,
      }}>
        <Header />
        <main style={{ flex: 1, marginTop: 120, width: '100%', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
          <Formulario />
          <Bloque icon="💡" title="¿Por qué GymAi?" text="Entrena como un atleta con rutinas personalizadas, tecnología y motivación. Descubre tu mejor versión con GymAi." />
          <Bloque icon="🏆" title="Ventajas" text="Acceso 24/7, rutinas adaptadas a tu nivel, seguimiento de progreso y soporte profesional. ¡Sin excusas!" />
          <Bloque icon="🤝" title="Únete a la comunidad" text="Miles de usuarios ya mejoran su salud y rendimiento con GymAi. ¿A qué esperas?" />
        </main>
        <Footer />
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </ParallaxBackground>
  );
};

export default App;
