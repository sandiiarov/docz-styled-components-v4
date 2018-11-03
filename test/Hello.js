import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  font-size: 30px;
  color: red;
`;

const BlueButton = styled(Button)`
  color: ${props => props.theme.color};
`;

const Hello = () => (
  <ThemeProvider theme={{ color: 'blue' }}>
    <React.Fragment>
      <Button>I am red</Button>
      <BlueButton>I am blue</BlueButton>
    </React.Fragment>
  </ThemeProvider>
);

export default Hello;
