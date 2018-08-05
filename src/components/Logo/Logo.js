import React from 'react';
import styles from './Logo.module.css';
import logoImage from '../../assets/images/Swiss-Sportsmans-Club-90th-Tacoma---white.png';

const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={logoImage} alt="SSCT Logo" />
    </div>
  );
};

export default logo;
