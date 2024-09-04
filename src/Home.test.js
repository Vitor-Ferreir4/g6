import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './JS/Home';


//Teste de renderizaçao do titulo
test('renderiza a mensagem de boa vinda', () => {
  const { getByText } = render(<Home />);
  const bemvindo = getByText(/Bem-vindo ao GameHub/i);
  expect(bemvindo).toBeInTheDocument();
});

//Mesmo teste mas vai falhar de proposito pois bem-vinde não existe
// test('renderiza a mensagem de boa vinda', () => {
//   const { getByText } = render(<Home />);
//   const bemvinde = getByText(/Bem-vinde ao GameHub/i);
//   expect(bemvinde).toBeInTheDocument();
// });

//teste de renderização de imagem
test('renderiza a imagem do sekiro na home', () => {
  const { getByAltText } = render(<Home />);
  const imagem = getByAltText(/Rec 1/i);
  expect(imagem).toBeInTheDocument();
});


//Realiza o teste do funcionamento do link do botão leia mais mas está com um erro pois ele encontra multiplos elementos com o mesmo nome "leia mais " então fizemos um filtro


// test('renders the correct link for the "Leia mais" button', () => {
//     const { getByText } = render(<Home />);
    
//     const readMoreButton = getByText(/Leia mais/i).closest('a');  // o closest procura o elemento <a>
  
//     expect(readMoreButton).toHaveAttribute('href', 'https://shopee.com.br');
//   });
test('renders the correct link for the "Leia mais" button', () => {
    const { getAllByText } = render(<Home />);
    const botao = getAllByText(/Leia mais/i);
    const botaolink = botao.find(button =>
      button.closest('a[href="https://shopee.com.br"]')
    );
    expect(botaolink).toBeInTheDocument();
    expect(botaolink.closest('a')).toHaveAttribute('href', 'https://shopee.com.br');
  });