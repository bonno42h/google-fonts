import React, { useState } from 'react';
import styles from './ViewMode.module.scss';
import ListIcon from '../../../assets/list.png';


const ViewMode = () => {
  // const [isSelectedListMode, setIsSelectedViewMode] = useState(false);
  return (
    <div className={styles.root}>
      <img className={styles.icon} alt="Toggle View Mode" src={ListIcon} />
    </div>
  );
};

export default ViewMode;
