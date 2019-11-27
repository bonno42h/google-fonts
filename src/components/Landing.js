import React, { createContext, useState } from 'react';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Grid from './Grid/Grid';
import ScrollToTop from './ScrollToTop/ScrollToTop';

export const Context = createContext();

const Landing = () => {
  const [previewText, setPreviewText] = useState({
    value: "All their equipment and instruments are alive.",
    label: "Sentence"
  });
  const [fontSize, setFontSize] = useState({value: '32px', label: '32px'});
  const [searchValue, setSearchValue] = useState('');

  return (
    <Context.Provider
      value={{
        previewText: previewText,
        setPreviewText: setPreviewText,
        fontSize: fontSize,
        setFontSize: setFontSize,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
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