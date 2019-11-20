import React from 'react';
import styled from 'styled-components'


const Item = ({ fontName, fontLink }) => {
  const Card = styled.p`
    @font-face {
      font-family: ${props => props.fontName};
      src: url(${props => props.fontLink});
    }
    font-family: ${props => props.fontName};
  `;

  return (
    <Card fontName={fontName} fontLink={fontLink}>
      testest
    </Card>
  );
}
export default Item;