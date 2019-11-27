import React, { createContext, useState } from 'react';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Grid from './Grid/Grid';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import whiteStyles from './Landing.module.scss';
import darkStyles from './LandingDark.module.scss';

export const Context = createContext();

const Landing = () => {
  const [previewText, setPreviewText] = useState({
    value: "All their equipment and instruments are alive.",
    label: "Sentence"
  });
  const [fontSize, setFontSize] = useState({value: '32px', label: '32px'});
  const [searchValue, setSearchValue] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('white');
  const [viewMode, setViewMode] = useState('grid');

  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;

  return (
    <Context.Provider
      value={{
        previewText: previewText,
        setPreviewText: setPreviewText,
        fontSize: fontSize,
        setFontSize: setFontSize,
        searchValue: searchValue,
        setSearchValue: setSearchValue,
        selectedTheme: selectedTheme,
        setSelectedTheme: setSelectedTheme,
        viewMode: viewMode,
        setViewMode: setViewMode,
      }}
    >
      <div className={styles.root}>
        <Header />
        <Toolbar />
        <ScrollToTop />
        <Grid />
      </div>
    </Context.Provider>
  );
}

export default Landing;