import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Passa os dados para o componente pai
  };

  return (
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
          className="textarea-field"
        />
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default Form;
