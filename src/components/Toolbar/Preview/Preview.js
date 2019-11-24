import React, { useState, useContext } from 'react';
import { Context } from '../../Landing';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import styles from './Preview.module.scss';

const Preview = () => {
  const { previewText, setPreviewText } = useContext(Context);
  const options = [
    { value: 'sentence', label: 'Sentence' },
    { value: 'alphabet', label: 'Alphabet' },
    { value: 'paragraph', label: 'Paragraph'}, 
    { value: 'numerals', label: 'Numerals'}, 
    { value: 'custom', label: 'Custom'}, 
  ];
  const [selectedOption, setSelectedOption] = useState(options[0])

  const updatePreviewText = (selected) => {
    if (selected.value === 'sentence') {
      setSelectedOption(options[0]);
      setPreviewText('All their equipment and instruments are alive.');
    }
    if (selected.value === 'alphabet') {
      setSelectedOption(options[1]);
      setPreviewText('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*');
    }
    if (selected.value === 'paragraph') {
      setSelectedOption(options[2]);
      setPreviewText('A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.');
    }
    if (selected.value === 'numerals') {
      setSelectedOption(options[3]);
      setPreviewText('1234567890');
    }
    if (selected.value === 'custom') {
      setSelectedOption(options[4]);
      setPreviewText('');
    }
  }

  return (
    <div className={styles.root}>
      <Dropdown
        className={styles.dropdown}
        options={options}
        value={selectedOption}
        placeholder="Select an option"
        onChange={(selected) => updatePreviewText(selected)}  
      />
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