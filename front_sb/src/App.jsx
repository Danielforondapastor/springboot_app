import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import Chatbot from './pages/chatbot';

// Componente que envuelve el formulario y añade navegación al enviar
const FormularioConNavegacion = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    // Puedes guardar formData en contexto o estado si quieres
    navigate('/chatbot');
  };

  return <Formulario onSubmit={handleFormSubmit} />;
};

const Bloque = ({ title, text, icon }) => (
  <section
    style={{
      maxWidth: 600,
      margin: '40px auto',
      background: 'rgba(36, 44, 60, 0.88)',
      borderRadius: 18,
      boxShadow: '0 6px 32px rgba(25,118,210,0.10)',
      padding: '36px 28px',
      textAlign: 'center',
      fontSize: 19,
      color: '#f5f7fa',
      fontWeight: 400,
      position: 'relative',
      border: '1.5px solid rgba(144,202,249,0.10)',
      backdropFilter: 'blur(6px)',
      transition: 'box-shadow 0.2s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      animation: 'fadein 1s',
    }}
  >
    {icon && (
      <span style={{ fontSize: 38, color: '#90caf9', marginBottom: 8 }}>{icon}</span>
    )}
    <div>
      <h2
        style={{
          color: '#90caf9',
          fontWeight: 700,
          marginBottom: 10,
          fontSize: 24,
          letterSpacing: 0.5,
        }}
      >
        {title}
      </h2>
      <p style={{ lineHeight: 1.6 }}>{text}</p>
    </div>
  </section>
);

const App = () => {
  return (
    <Router>
      <ParallaxBackground>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
            padding: '0 12px',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <Header />
          <main
            style={{
              flex: 1,
              marginTop: 120,
              width: '100%',
              maxWidth: 900,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FormularioConNavegacion />
                    <Bloque
                      icon="💡"
                      title="¿Por qué GymAi?"
                      text="Entrena como un atleta con rutinas personalizadas, tecnología y motivación. Descubre tu mejor versión con GymAi."
                    />
                    <Bloque
                      icon="🏆"
                      title="Ventajas"
                      text="Acceso 24/7, rutinas adaptadas a tu nivel, seguimiento de progreso y soporte profesional. ¡Sin excusas!"
                    />
                    <Bloque
                      icon="🤝"
                      title="Únete a la comunidad"
                      text="Miles de usuarios ya mejoran su salud y rendimiento con GymAi. ¿A qué esperas?"
                    />
                  </>
                }
              />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        `}</style>
      </ParallaxBackground>
    </Router>
  );
};

export default App;
