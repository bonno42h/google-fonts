import React, { useState, useEffect } from 'react';
import { loadFonts } from './Grid.utils';
import Item from './Item/Item';

const Grid = () => {
  const [gridRequest, setGridRequest] = useState({
    isLoading: true,
    items: [],
  });

  useEffect(() => {
    loadFonts({ setGridRequest });
  }, []);

  const { isLoading } = gridRequest;

  return (
    <div>
      {isLoading && (
        <div>Loading data</div>
      )}

      {!isLoading && gridRequest.items.map(item => (
        <Item fontName={item.family} fontLink={item.files.regular} key={item.family} />
      ))}


      <button type="button" onClick={() => console.log(gridRequest.items)}>DEBUGGGGG</button>
    </div>      
  );
};

export default Grid;