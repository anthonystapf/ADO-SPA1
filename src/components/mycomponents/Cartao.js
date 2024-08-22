import React from 'react';
import styled from 'styled-components';
import Imagem from './Imagem';

const Cartao = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
  margin: 18px;
`;

const TituloCartao = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const DescricaoCartao = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <Cartao>
      <Imagem src={imageUrl} />
      <TituloCartao>{title}</TituloCartao>
      <DescricaoCartao>{description}</DescricaoCartao>
    </Cartao>
  );
};

export default Card;
