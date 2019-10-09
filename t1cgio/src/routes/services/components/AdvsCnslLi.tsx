import * as React from 'react';

import styles from './advsCnslLi.scss';

interface IProps {
  text: string;
}

const AdvsCnslLi = ({text}: IProps) => (
  <li className={styles.advsCnslLi}>
    <div className={styles.circle}>
      <div className={styles.checkmark} />
    </div>
    <p className={styles.text}>{text}</p>
  </li>
);

export default AdvsCnslLi;
