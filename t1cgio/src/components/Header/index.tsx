import Button from '@components/Button';
import * as React from 'react';
import styles from './index.scss';

interface IProps {
  className?: string;
  id?: string;
  children?: JSX.Element | JSX.Element[];
  background: 'page1' | 'page2' | 'page3' | 'page4' | 'page5';
}

const randDeg = () => {
  let num = Math.floor(Math.random() * 15) + 5;
  num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  return num.toString() + 'deg';
};

const randWidth = () => {
  const num = Math.floor(Math.random() * 400) + 100;
  return num.toString() + 'px';
};

const randLeft = () => {
  const num = Math.floor(Math.random() * 90) - 10;
  return num.toString() + '%';
};

const Header = (props: IProps) => (
  <>
    {props.background === 'page5' ? (
      <header className={styles.bar}>
        <div
          className={styles.barray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.barray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.barray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.barray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
      </header>
    ) : (
      <header className={styles.homeHeader}>
        <div className={styles.background + ' ' + styles[props.background]} />
        <div
          className={styles.ray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.ray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.ray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div
          className={styles.ray}
          style={{transform: 'rotate(' + randDeg() + ')', width: randWidth(), left: randLeft()}}
        />
        <div className={styles.content}>{props.children}</div>
      </header>
    )}
  </>
);

export default Header;
