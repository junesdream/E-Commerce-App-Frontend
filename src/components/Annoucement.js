import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 height: 30px;
  background-image: url(https://i.pinimg.com/originals/e5/89/95/e5899572ecace2b0895b36db7703a001.gif);
  background-size: cover;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`

const Annoucement = () => {
  return <Container> Super discount offers! Free Shipping on Orders Over €50</Container>;
}

export default Annoucement