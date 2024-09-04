import React from 'react';
import '../CSS/Home.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importar ícones de redes sociais

function Home() {
  return (
      <div className="homepage-container">
        <header className="header">
          <h1 className="title">Bem-vindo ao GameHub</h1>
          <p className="subtitle">Seu portal de novidades e jogos populares</p>
        </header>
        <main className="main-content">
          <section className="section">
            <h2 className="section-title">Últimas Novidades</h2>
            <div className="news">
              <article className="news-item">
                <h3 className="news-title">Novo Jogo Lançado!</h3>
                <p className="news-description">Confira o lançamento mais recente no mundo dos games...</p>
                <a href='https://shopee.com.br'><button className="read-more">Leia mais</button></a>
              </article>
              <article className="news-item">
                <h3 className="news-title">Atualização Disponível</h3>
                <p className="news-description">A nova atualização do seu jogo favorito já está disponível...</p>
                <button className="read-more">Leia mais</button>
              </article>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Jogos Populares</h2>
            <div className="games">
              <div className="game-card">
                <img src={require('../mídia/game1.avif')} alt="Game 1" className="game-image" />
                <h3 className="game-title">Red Dead Redemption 2</h3>
              </div>
              <div className="game-card">
                <img src={require('../mídia/game2.avif')} alt="Game 2" className="game-image" />
                <h3 className="game-title">God Of War Ragnarok</h3>
              </div>
              <div className="game-card">
                <img src={require('../mídia/game3.webp')} alt="Game 3" className="game-image" />
                <h3 className="game-title">Elden Ring</h3>
              </div>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Eventos Futuros</h2>
            <div className="events">
              <div className="event-item">
                <h3 className="event-title">Campeonato de eSports</h3>
                <p className="event-date">Data: 25 de Julho</p>
                <p className="event-description">Participe do maior campeonato de eSports da região...</p>
                <button className="event-more">Saiba mais</button>
              </div>
              <div className="event-item">
                <h3 className="event-title">Lançamento de Novo Jogo</h3>
                <p className="event-date">Data: 30 de Julho</p>
                <p className="event-description">Venha conhecer o mais novo lançamento do mundo dos games...</p>
                <button className="event-more">Saiba mais</button>
              </div>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Recomendações Personalizadas</h2>
            <div className="recommendations">
              <div className="recommendation-item">
                <img src={require('../mídia/rec1.png')} alt="Rec 1" className="rec-image" />
                <h3 className="rec-title">Ghost Of Tsushima</h3>
              </div>
              <div className="recommendation-item">
                <img src={require('../mídia/rec2.webp')} alt="Rec 2" className="rec-image" />
                <h3 className="rec-title">Sekiro Shadows Twice (GOTY Edition)</h3>
              </div>
              <div className="recommendation-item">
                <img src={require('../mídia/rec3.avif')} alt="Rec 3" className="rec-image" />
                <h3 className="rec-title">Hollow Knight</h3>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-about">
              <h3 className="footer-title">Sobre o GameHub</h3>
              <p className="footer-description">O GameHub é seu portal definitivo para todas as novidades e jogos populares. Fique atualizado com os lançamentos e eventos mais recentes no mundo dos games.</p>
            </div>
            <div className="footer-links">
              <h3 className="footer-title">Links Úteis</h3>
              <ul className="footer-list">
                <li><a href="#">Início</a></li>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Jogos</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3 className="footer-title">Contato</h3>
              <p className="footer-description">Email: contato@gamehub.com</p>
              <p className="footer-description">Telefone: (11) 1234-5678</p>
              <div className="footer-social">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <p className="footer-copy">© 2024 GameHub. Todos os direitos reservados.</p>
        </footer>
      </div>
  );
};

export default Home;
