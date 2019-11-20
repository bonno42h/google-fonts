import React from 'react';
import Header from '../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import Grid from '../Grid/Grid';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Toolbar />
      <Grid />
    </div>
  );
}

export default Landing;