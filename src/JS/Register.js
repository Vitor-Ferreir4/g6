import React, { useState } from 'react';
import '../CSS/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

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

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Usuário registrado com sucesso!');
        console.log('Usuário registrado com sucesso:', data);
      } else {
        setErrors({ form: data.message || 'Erro ao registrar usuário.' });
        console.error('Erro ao registrar usuário:', data);
      }
    } catch (error) {
      setErrors({ form: 'Erro de rede. Por favor, tente novamente.' });
      console.error('Erro de rede:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = { username, email, password };
      registerUser(userData);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <div className="register-box">
        <h1 className="title2">Cadastro</h1>
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
          {errors.form && <p className="error">{errors.form}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
