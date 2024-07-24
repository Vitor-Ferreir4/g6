const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend do GameHub');
});

app.get('/api/test', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// EU SOU FODAAAAAAAAAAA
