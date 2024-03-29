import React, { useContext, Fragment } from 'react';
import { Context } from '../../Landing';
import styled from 'styled-components'


const Item = ({ fontName, fontLink }) => {
  const { previewText, fontSize, selectedTheme, viewMode } = useContext(Context);
  const CardContainer = styled.div`
    min-width: 330px;
    max-width: 330px;
    margin-bottom: 20px;
    border-top: 1px solid rgba(0,0,0,.4);
    flex: 1;
    min-height: 250px;
    margin-right: 40px;
    ${selectedTheme === 'dark' ? 'filter: invert(100%);' : ''}
  `;
  const CardText = styled.p`
    @font-face {
      font-family: ${props => props.fontName};
      src: url(${props => props.fontLink});
    }
    font-family: ${props => props.fontName};
    [contenteditable]:focus {
      outline: 0px solid transparent;
    }
    font-size: ${fontSize.value};
  `;
  const CardTitle = styled.h1`
    color: rgba(0,0,0,.6);
    flex-grow: 1;
    margin-top: 12px;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: Roboto, Helvetica, sans-serif;
  `;
  const CardSubtitle = styled.h2`
    color: rgba(0,0,0,.6);
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: Roboto;
  `;
  const AddButton = styled.div`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 800;
    width: 22px;
    height: 22px;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    ${selectedTheme === 'dark' ? 'background: #00ADAD' : 'background: #ff5252'}
    border-width: 1px;
    border-style: solid;
    ${selectedTheme === 'dark' ? 'border-color: #00ADAD' : 'border-color: #ff5252'}
    border-image: initial;
    text-align: center;
    display: inline-block;
    position: relative;
    float: right;
    top: 10px;
    right: 10px;
  `;
  const ListContainer = styled.div`
    width: 100%;
    border-top: 1px solid black;
    ${selectedTheme === 'dark' ? 'filter: invert(100%);' : ''}
  `;
  const ListTitle = styled.h1`
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: Roboto, Helvetica, sans-serif;

  `;

  return (
    <Fragment>
      {viewMode === 'grid' && (
        <CardContainer>
          <AddButton>+</AddButton>
          <CardTitle>{fontName}</CardTitle>
          <CardSubtitle>Author of the font</CardSubtitle>
          <CardText fontName={fontName} fontLink={fontLink.replace("http", "https")}>
            <span suppressContentEditableWarning={true} contentEditable={true}>{previewText.value}</span>
          </CardText>
        </CardContainer>
      )}
      {viewMode === 'list' && (
        <ListContainer>
          <ListTitle>{fontName}</ListTitle>
          <CardText fontName={fontName} fontLink={fontLink}>
            <span contentEditable={true}>{previewText.value}</span>
          </CardText>
        </ListContainer>
      )}
    </Fragment>
  );
}
export default Item;