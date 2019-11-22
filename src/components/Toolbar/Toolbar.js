import React from 'react';
import Preview from './Preview/Preview';
import Search from './Search/Search';
import styles from './Toolbar.module.scss';

const Toolbar = () => {
 
  return (
    <div className={styles.root}>
      <Search />
      <input />
      <Preview />
    </div>
  )
};

export default Toolbar;
