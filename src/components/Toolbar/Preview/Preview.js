import React, { useContext } from 'react';
import { Context } from '../../Landing';
import Dropdown from '../../../utils/Dropdown/Dropdown';
import 'react-dropdown/style.css'
import styles from './Preview.module.scss';

const Preview = () => {
  const { previewText, setPreviewText } = useContext(Context);
  const options = [
    { value: 'All their equipment and instruments are alive.', label: 'Sentence' },
    { value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*', label: 'Alphabet' },
    { value: 'A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.', label: 'Paragraph'}, 
    { value: '1234567890', label: 'Numerals'}, 
    { value: '', label: 'Custom'}, 
  ];

  return (
    <div className={styles.root}>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          items={options}
          width={120}
          selectedOption={options.find(e => e.value === previewText).label}
          placeholder="Select an option"
          setOption={setPreviewText} 
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Type something"
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
        />

      </div>
    </div>
  );
};

export default Preview;