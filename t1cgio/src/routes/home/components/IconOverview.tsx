import * as React from 'react';
import {Link} from 'react-router-dom';
import styles from './iconOverview.scss';

interface IProps {
  title: string;
  Icon: React.FunctionComponent;
  link: string;
  external?: boolean;
  children: string;
}

const IconOverview = ({title, Icon, link, children, external}: IProps) => (
  <div className={styles.iconOverview}>
    <div className={styles.icon}>
      <Icon />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{children}</p>
    {external ? (
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        learn more
      </a>
    ) : (
      <Link className={styles.link} to={link}>
        learn more
      </Link>
    )}
  </div>
);

export default IconOverview;
