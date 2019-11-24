import React, { useState } from 'react';
import ListIcon from '../../../assets/list.png';


const ViewMode = () => {
  const [isSelectedListMode, setIsSelectedViewMode] = useState(false);
  return (
    <div>
      <img src={ListIcon} />
    </div>
  );
};

export default ViewMode;
