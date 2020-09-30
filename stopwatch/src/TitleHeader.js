import React from 'react';
import styled from 'styled-components';

const TitleHeader = (props) => {
  return(
  <Head>{props.title}</Head>
  );
}

export default TitleHeader;

const Head = styled.p`
  justify-align: center;
  align-self: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.56em;
  font-weight: bold;
`
