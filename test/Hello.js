import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: red;
`;

const BlueButton = styled(Button)`
  color: blue;
`;

const Hello = () => (
  <React.Fragment>
    <Button>I am red</Button>
    <BlueButton>I am blue</BlueButton>
  </React.Fragment>
);

export default Hello;
