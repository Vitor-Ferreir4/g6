// import React, { useState } from 'react';
// import '../CSS/Login.css';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         console.log('Login successful', data);
//       } else {
//         setError(data.message || 'Erro ao fazer login.');
//       }
//     } catch (error) {
//       setError('Erro de rede. Por favor, tente novamente.');
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-box">
//         <h1 className="title1">Login</h1>
//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             className="input"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             className="input"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="button" type="submit">Login</button>
//         </form>
//         {error && <p className="error">{error}</p>}
//         <div className="links">
//           <a href="#" className="link">Esqueceu a senha?</a>
//           <Link to='/cadastro' className="link">Cadastrar-se</Link> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
