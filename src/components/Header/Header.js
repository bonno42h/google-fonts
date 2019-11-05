import React from 'react';
import GoogleLogo from '../../assets/google-logo.png';
import styles from './Header.scss';

const Header = () => {
  return (<div>
    <img src={GoogleLogo} className={styles.googleLogo} alt="Google Logo" />
    <span>Fonts</span>
  </div>);
}


export default Header;