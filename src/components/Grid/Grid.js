import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Landing';
import { loadFonts } from './Grid.utils';
import { CardsContainer } from '../../styles/styles';
import styles from './Grid.module.scss';
import Item from './Item/Item';

const Grid = () => {
  const { searchValue } = useContext(Context);
  const [gridRequest, setGridRequest] = useState({
    isLoading: true,
    items: [],
  });
  const [amountToDisplay, setAmountToDisplay] = useState(20);
  const itemsToDisplay = gridRequest.items.slice(0, amountToDisplay);
  const increaseAmountToDisplay = () => {
    setAmountToDisplay(amountToDisplay + 20);
  };
  const searchMatchingItems = gridRequest.items
    .filter(item => item.family.toLowerCase().includes(searchValue.toLowerCase()))
    .slice(0, amountToDisplay);
  useEffect(() => {
    loadFonts({ setGridRequest });
  }, []);

  const { isLoading } = gridRequest;

  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        increaseAmountToDisplay();
        window.scrollBy(0, -10);
    }
};

  return (
    <div className={styles.root}>
     {isLoading && (
       <div className={styles.loader}></div>
     )}

      <CardsContainer>
        {!isLoading && (searchValue === '') && itemsToDisplay.map(item => (
          <Item fontName={item.family} fontLink={item.files.regular} key={item.family} />
        ))}
        {!isLoading && (searchValue !== '') && searchMatchingItems.map(item => (
          <Item fontName={item.family} fontLink={item.files.regular} key={item.family} />
        ))}
      </CardsContainer>

    </div>      
  );
};

export default Grid;