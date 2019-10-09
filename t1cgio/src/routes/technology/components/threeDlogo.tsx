import * as React from 'react';

import styles from './threeDlogo.scss';

import Logo from '@assets/svg/t1cgLogo.svg';

const ThreeDLogo = () => (
  <div className={styles.parent}>
    {/* <div className={styles.floor} /> */}
    <Logo className={styles.logo} />
    <div className={styles.logoShadow} />
  </div>
);

export default ThreeDLogo;
