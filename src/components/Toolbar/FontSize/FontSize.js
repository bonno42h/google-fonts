import React, { useContext } from 'react';
import Dropdown from '../../../utils/Dropdown/Dropdown';
import styles from './FontSize.module.scss';
import { Context } from '../../Landing';

const FontSize = () => {
  const { fontSize, setFontSize } = useContext(Context);
  const options = [
    { value: '20px', label: '20px' },
    { value: '24px', label: '24px' },
    { value: '32px', label: '32px'}, 
    { value: '40px', label: '40px'}, 
  ];
  return (
    <div className={styles.root}>
      <Dropdown
        items={options}
        selectedOption={fontSize.label}
        setOption={setFontSize}
        width={80}  
      />
    </div>
  );
};

export default FontSize;