import React, { useContext } from 'react';
import { Context } from '../../Landing';
import whiteStyles from './ViewMode.module.scss';
import darkStyles from './ViewModeDark.module.scss';
import ListIcon from '../../../assets/list.png';


const ViewMode = () => {
  const { selectedTheme } = useContext(Context);
  const styles = selectedTheme === 'white' ? whiteStyles : darkStyles;

  // const [isSelectedListMode, setIsSelectedViewMode] = useState(false);
  return (
    <div className={styles.root}>
      <img className={styles.icon} alt="Toggle View Mode" src={ListIcon} />
    </div>
  );
};

export default ViewMode;
