import React from 'react';
import styles from './ThemePicker.module.scss';

const ThemePicker = () => {
  return (
    <div>
      <div className={styles.white} />
      <div className={styles.dark} />
    </div>
  );
};

export default ThemePicker;