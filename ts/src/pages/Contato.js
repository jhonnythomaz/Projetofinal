import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.nome}!`);
    // Aqui você pode adicionar a lógica de envio de e-mail
  };

  return (
    <div className="contato-container">
      <h1>Contato</h1>

      {/* Formulário de contato */}
      <form onSubmit={handleSubmit} className="form-contato">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>

      {/* Informações de contato */}
      <div className="contato-info">
        <h2>Entre em contato conosco!</h2>
        <p>Telefone: (11) 98765-4321</p>
        <p>Email: contato@exemplo.com</p>
      </div>
    </div>
  );
};

export default Contato;
