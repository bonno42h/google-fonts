import React, { useState, useEffect } from 'react';
import { loadFonts } from './Grid.utils';
import { CardsContainer } from '../../styles/styles';
import Item from './Item/Item';

const Grid = () => {
  const [gridRequest, setGridRequest] = useState({
    isLoading: true,
    items: [],
  });
  const [amountToDisplay, setAmountToDisplay] = useState(20);
  const itemsToDisplay = gridRequest.items.slice(0, amountToDisplay);
  const increaseAmountToDisplay = () => {
    setAmountToDisplay(amountToDisplay + 20);
  };
  
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
    <div>
      {isLoading && (
        <div>Loading data</div>
      )}
      <button type="button" onClick={() => increaseAmountToDisplay()}>DEBUGGGGG</button>

      <CardsContainer>
        {!isLoading && itemsToDisplay.map(item => (
          <Item fontName={item.family} fontLink={item.files.regular} key={item.family} />
        ))}
      </CardsContainer>

    </div>      
  );
};

export default Grid;