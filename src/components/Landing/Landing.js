import React from 'react';
import Header from '../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Toolbar />
    </div>
  );
}

export default Landing;