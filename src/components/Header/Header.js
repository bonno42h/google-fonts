import React from 'react';
import GoogleLogo from '../../assets/google-logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.headerCorner}>
        <img src={GoogleLogo} className={styles.googleLogo} alt="Google Logo" />
        <span className={styles.fontsText}> Fonts</span>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="https://fonts.google.com/">catalog</a></li>
          <li><a href="https://fonts.google.com/featured">featured</a></li>
          <li><a href="https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab">articles</a></li>
          <li><a href="https://fonts.google.com/about">about</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;