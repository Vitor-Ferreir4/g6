import React, { useState } from 'react';
import '../CSS/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Preencha esse campo.';
    if (!email.includes('@') || !email.includes('.com')) newErrors.email = 'Email inválido.';
    if (!password) {
      newErrors.password = 'Preencha esse campo.';
    } else if (password.length < 8) {
      newErrors.password = 'A senha deve ter no mínimo 8 caracteres.';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'A senha deve ter pelo menos uma letra maiúscula.';
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = 'A senha deve ter pelo menos uma letra minúscula.';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'A senha deve ter pelo menos um número.';
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = 'A senha deve ter pelo menos um caractere especial.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulário enviado com sucesso!');
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <h1 className="title">Cadastro</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
