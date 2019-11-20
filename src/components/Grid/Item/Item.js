import React, { useContext } from 'react';
import { Context } from '../../Landing';
import styled from 'styled-components'

const Item = ({ fontName, fontLink }) => {
  const { previewText } = useContext(Context);
  const Card = styled.p`
    @font-face {
      font-family: ${props => props.fontName};
      src: url(${props => props.fontLink});
    }
    font-family: ${props => props.fontName};
  `;

  return (
    <Card fontName={fontName} fontLink={fontLink}>
      {previewText}
    </Card>
  );
}
export default Item;