import React, { createContext, useState } from 'react';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Grid from './Grid/Grid';
import ScrollToTop from './ScrollToTop/ScrollToTop';

export const Context = createContext();

const Landing = () => {
  const [previewText, setPreviewText] = useState("All their equipment and instruments are alive.");
  const [fontSize, setFontSize] = useState('32px');

  return (
    <Context.Provider
      value={{
        previewText: previewText,
        setPreviewText: setPreviewText,
        fontSize: fontSize,
        setFontSize: setFontSize,
      }}
    >
      <Header />
      <Toolbar />
      <ScrollToTop />
      <Grid />
    </Context.Provider>
  );
}

export default Landing;