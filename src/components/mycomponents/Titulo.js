import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
`;

const Titule = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default Titulo;
