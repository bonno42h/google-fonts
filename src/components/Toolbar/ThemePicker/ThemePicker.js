import React, { useContext } from 'react';
import { Context } from '../../Landing';
import whiteStyles from './ThemePicker.module.scss';
import darkStyles from './ThemePickerDark.module.scss';

const ThemePicker = () => {
  const { selectedTheme, setSelectedTheme } = useContext(Context);
  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;

  return (
    <div className={styles.root}>
      <div className={styles.white} onClick={() => setSelectedTheme('white')} />
      <div className={styles.dark} onClick={() => setSelectedTheme('dark')} />
    </div>
  );
};

export default ThemePicker;