// Navbar.js
import React from 'react';
import '../CSS/Navbar.css'; // Importe o arquivo de estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap



function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Tela incial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="saiba">Saiba mais!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
          </ul>
          <a className="btn btn-custom" href="/login" role="button" style={{ fontWeight: 'bold' }}>Login</a>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;