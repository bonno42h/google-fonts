import React from 'react';
import Header from '../Header/Header';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
}

export default Landing;