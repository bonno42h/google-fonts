import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'


const Preview = () => {

  const options = [
    { value: 'sentence', label: 'Sentence' },
    { value: 'alphabet', label: 'Alphabet' },
    { value: 'paragraph', label: 'Paragraph'}, 
    { value: 'numerals', label: 'Numerals'}, 
    { value: 'custom', label: 'Custom'}, 
  ];
    
  const defaultOption = options[0];

  return (
    <div>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
      <input
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        placeholder="Types something"
      />
    </div>
  );
};

export default Preview;