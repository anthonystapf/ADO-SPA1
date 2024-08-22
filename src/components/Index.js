import React from 'react';
import Titulo from './mycomponents/Titulo';
import Descricao from './mycomponents/Descricao';
import Produtos from './mycomponents/Produtos';
import ListaProdutos from './mycomponents/listaProdutos';

const Index = () => {
  return (
    <div>
      <Titulo>Tela de Filmes</Titulo>
      <Descricao>Confira nossos filmes:</Descricao>
      <Produtos products={ListaProdutos} />
    </div>
  );
};

export default Index;
