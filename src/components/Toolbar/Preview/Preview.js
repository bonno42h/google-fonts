import React, { useContext } from 'react';
import { Context } from '../../Landing';
import Dropdown from '../../../utils/Dropdown/Dropdown';
import whiteStyles from './Preview.module.scss';
import darkStyles from './PreviewDark.module.scss';

const Preview = () => {
  const { previewText, setPreviewText, selectedTheme } = useContext(Context);
  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;
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
          selectedOption={previewText.label}
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
          value={previewText.value}
          onChange={(e) => setPreviewText({
            label: previewText.label,
            value: e.target.value,
          })}
        />

      </div>
    </div>
  );
};

export default Preview;