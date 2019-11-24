import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ items, selectedOption, setOption }) => {
  const [displayState, setDisplayState] = useState(false);
  
  const showDropdownMenu = (event) => {
    console.log(setOption)
    event.preventDefault();
    setDisplayState(!displayState);
    if (!displayState) {
      document.addEventListener('click', hideDropdownMenu);
    }
  };
  
  const hideDropdownMenu = () => {
    setDisplayState(false);
      document.removeEventListener('click', hideDropdownMenu);
  };
  
      return (
          <div className={styles.dropdown} style = {{width:"200px"}} >
           <div className={styles.button} onClick={showDropdownMenu}>{selectedOption}</div>
  
            { displayState ? (
            <ul>
              {items.map(item => (
                <li key={item.value} onClick={() => setOption(item.value)}>{item.label}</li>
              ))}
            </ul>
          ):
          (
            null
          )
          }
         </div>
  
      );
  }
  
  export default Dropdown;