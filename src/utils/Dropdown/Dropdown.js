import React, { useState, useContext } from 'react';
import { Context } from '../../components/Landing';
import whiteStyles from './Dropdown.module.scss';
import darkStyles from './DropdownDark.module.scss';

const Dropdown = ({ items, selectedOption, setOption, width ="200" }) => {
  const { selectedTheme } = useContext(Context);
  const [displayState, setDisplayState] = useState(false);
  
  const showDropdownMenu = (event) => {
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

  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;

      return (
          <div className={styles.dropdown} style ={{width:`${width}px`}} >
           <div className={styles.button} onClick={showDropdownMenu}>{selectedOption}</div>
  
            { displayState ? (
            <ul>
              {items.map(item => (
                <li key={item.value} onClick={() => setOption({value: item.value, label: item.label})}>{item.label}</li>
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