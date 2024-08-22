import React from 'react';
import styled from 'styled-components';
import Cartao from './Cartao';

const Produtos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ products }) => {
  return (
    <Produtos>
      {products.map(product => (
        <Cartao 
          key={product.id} 
          title={product.title} 
          description={product.description} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </Produtos>
  );
};

export default Products;
