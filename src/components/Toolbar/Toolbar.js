import React from 'react';
import Preview from './Preview/Preview';
import Search from './Search/Search';
import FontSize from './FontSize/FontSize';
import ThemePicker from './ThemePicker/ThemePicker';
import ViewMode from './ViewMode/ViewMode';
import Reset from './Reset/Reset';
import styles from './Toolbar.module.scss';

const Toolbar = () => {
 
  return (
    <div className={styles.root}>
      <Search />
      <Preview />
      <FontSize />
      <ThemePicker />
      <ViewMode />
      <Reset />
    </div>
  )
};

export default Toolbar;
