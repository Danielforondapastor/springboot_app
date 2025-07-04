import React, { useState } from 'react';
import Select from 'react-select';

const objetivos = [
  { value: 'fuerza', label: 'Fuerza' },
  { value: 'hipertrofia', label: 'Hipertrofia' },
  { value: 'perdida de grasa', label: 'Pérdida de grasa' },
];
const niveles = [
  { value: 'principiante', label: 'Principiante' },
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' },
];
const lugares = [
  { value: 'gimnasio', label: 'Gimnasio' },
  { value: 'casa', label: 'Casa' },
  { value: 'aire libre', label: 'Aire libre' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: 'rgba(255,255,255,0.18)',
    borderColor: state.isFocused ? '#1976d2' : '#90caf9',
    borderRadius: 8,
    boxShadow: state.isFocused ? '0 0 0 2px #90caf9' : '0 2px 8px rgba(25,118,210,0.07)',
    minHeight: 48,
    fontFamily: 'inherit',
    fontSize: 16,
    color: '#fff',
    transition: 'border 0.2s',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    background: 'rgba(255,255,255,0.97)', // fondo claro para el menú
    borderRadius: 10,
    fontSize: 16,
    color: '#222',
    zIndex: 20,
    boxShadow: '0 8px 32px rgba(25,118,210,0.10)'
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? '#90caf9' : state.isFocused ? '#e3f2fd' : 'transparent',
    color: '#222',
    fontWeight: state.isSelected ? 700 : 400,
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#e3f2fd',
  }),
};

const Formulario = () => {
  const [form, setForm] = useState({
    objetivo: null,
    nivel: null,
    lugar: null
  });

  const handleChange = (selected, { name }) => {
    setForm({ ...form, [name]: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.objetivo || !form.nivel || !form.lugar) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert('Formulario enviado!');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 420,
      margin: '60px auto 0 auto',
      padding: '36px 28px',
      background: 'rgba(36, 44, 60, 0.93)',
      borderRadius: 20,
      boxShadow: '0 6px 32px rgba(25,118,210,0.13)',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      border: '1.5px solid rgba(144,202,249,0.10)',
      backdropFilter: 'blur(6px)',
      fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
      alignItems: 'center',
      animation: 'fadein 1s',
    }}>
      <h2 style={{
        color: '#90caf9',
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: 8,
        letterSpacing: 1,
        fontFamily: 'inherit',
        fontSize: 26,
        textShadow: '0 2px 12px rgba(25,118,210,0.10)'
      }}>
        <span role="img" aria-label="dumbbell" style={{fontSize: 28, marginRight: 8, verticalAlign: 'middle'}}>🏋️‍♂️</span>
        ¡Crea tu rutina!
      </h2>
      <div style={{ width: '100%' }}>
        <label style={{ fontWeight: 500, color: '#fff', fontFamily: 'inherit', width: '100%', fontSize: 16, marginBottom: 6, display: 'block' }}>
          Objetivo
        </label>
        <Select
          name="objetivo"
          value={form.objetivo}
          onChange={handleChange}
          options={objetivos}
          placeholder="Selecciona..."
          styles={customStyles}
          isSearchable={false}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label style={{ fontWeight: 500, color: '#fff', fontFamily: 'inherit', width: '100%', fontSize: 16, marginBottom: 6, display: 'block' }}>
          Nivel
        </label>
        <Select
          name="nivel"
          value={form.nivel}
          onChange={handleChange}
          options={niveles}
          placeholder="Selecciona..."
          styles={customStyles}
          isSearchable={false}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label style={{ fontWeight: 500, color: '#fff', fontFamily: 'inherit', width: '100%', fontSize: 16, marginBottom: 6, display: 'block' }}>
          ¿Dónde entrenas?
        </label>
        <Select
          name="lugar"
          value={form.lugar}
          onChange={handleChange}
          options={lugares}
          placeholder="Selecciona..."
          styles={customStyles}
          isSearchable={false}
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: 8,
          padding: '13px 0',
          borderRadius: 10,
          border: 'none',
          background: 'linear-gradient(90deg, #1976d2 0%, #90caf9 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 18,
          boxShadow: '0 2px 8px rgba(25,118,210,0.13)',
          cursor: 'pointer',
          letterSpacing: 1,
          transition: 'background 0.2s, transform 0.2s',
          fontFamily: 'inherit',
          width: '100%',
          outline: 'none',
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'}
        onMouseOut={e => e.currentTarget.style.transform = 'none'}
      >
        Generar rutina
      </button>
    </form>
  );
};

export default Formulario;