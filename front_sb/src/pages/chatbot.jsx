import { useEffect, useRef, useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput(''); // limpia input

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        throw new Error('Error al comunicarse con el backend');
      }

      const data = await response.json(); // { reply: "..." }
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        sender: 'bot',
        text: 'Lo siento, hubo un problema al procesar tu mensaje.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div style={{
      maxHeight: 'calc(100vh - 130px)',
      overflowY: 'auto',
      padding: '20px',
      margin: '80px auto 0 auto',
      maxWidth: 600,
      background: '#1e283c',
      borderRadius: '16px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    }}>
      <div style={{ marginBottom: '12px' }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              background: msg.sender === 'user' ? '#90caf9' : '#555a88',
              color: msg.sender === 'user' ? '#000' : '#fff',
              padding: '10px 14px',
              borderRadius: '10px',
              marginBottom: '8px',
              maxWidth: '80%',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              marginLeft: msg.sender === 'user' ? 'auto' : '0',
              marginRight: msg.sender === 'user' ? '0' : 'auto',
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#90caf9',
            color: '#000',
            padding: '12px 16px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
