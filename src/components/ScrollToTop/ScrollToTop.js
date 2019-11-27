import React, { useContext } from 'react';
import { Context } from '../Landing';
import styled from 'styled-components'

const ScrollToTop = () => {
  const { selectedTheme } = useContext(Context);
  const UpButton = styled.div`
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    align-items: center;
    width: 56px;
    height: 56px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    position: fixed;
    right: 0;
    margin-right: 10px;
    z-index: 100;
    transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    bottom: 60px;
    transform: translateX(-100%);
    ${selectedTheme === 'dark' ? 'filter: invert(100%);' : ''}
  `;

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return(
    <UpButton onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z">
        </path>
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z">
        </path>
      </svg>
    </UpButton>
  );
};

export default ScrollToTop;