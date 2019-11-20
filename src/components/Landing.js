import React, { createContext, useState } from 'react';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Grid from './Grid/Grid';

export const Context = createContext();

const Landing = () => {
  const [previewText, setPreviewText] = useState("All their equipment and instruments are alive.");

  return (
    <Context.Provider
      value={{
        previewText: previewText,
        setPreviewText: setPreviewText,
      }}
    >
      <Header />
      <Toolbar />
      <Grid />
    </Context.Provider>
  );
}

export default Landing;