import React from 'react';
import styled from 'styled-components';

const Descricao = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Description = ({ children }) => {
  return <Descricao>{children}</Descricao>;
};

export default Description;
