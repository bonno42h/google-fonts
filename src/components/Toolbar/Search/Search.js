import React, { useContext } from 'react';
import whiteStyles from './Search.module.scss';
import darkStyles from './SearchDark.module.scss';
import { Context } from '../../Landing';

const Search = () => {
  const {searchValue, setSearchValue, selectedTheme} = useContext(Context);
  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        height="24px"
        width="24px"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
      <input  
        className={styles.searchBar}
        placeholder="Search fonts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
};

export default Search;
