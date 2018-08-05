import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import styles from './Plus.module.css';

const Plus = (props) => {
  return (
    <FontAwesomeIcon
      icon={faPlus}
      fixedWidth
      size={props.size}
      className={styles.Plus}
    />
  );
};

export default Plus;
