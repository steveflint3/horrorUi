import * as React from 'react';
import {Link} from 'react-router-dom';

import combineClasses from '@util/combineClasses';
import styles from './index.scss';

interface IProps {
  children: string;
  className?: string;
  to: string;
  color?:
    | 'mercury'
    | 'alto'
    | 'silver'
    | 'boulder'
    | 'coalMine'
    | 'klein'
    | 'lightSlate'
    | 'royal'
    | 'cobalt'
    | 'malibu'
    | 'denim'
    | 'science'
    | 'lochmara';
}

const colors = [
  'mercury',
  'alto',
  'silver',
  'boulder',
  'coalMine',
  'klein',
  'lightSlate',
  'royal',
  'cobalt',
  'malibu',
  'denim',
  'science',
  'lochmara',
];

const ArrowLink = (props: IProps) => (
  <Link
    to={props.to}
    className={combineClasses(props.className, styles.arrow, {
      default: styles.royal,
      options: {
        [styles[props.color]]: colors.indexOf(props.color) !== -1,
      },
    })}>
    {props.children}
  </Link>
);

export default ArrowLink;
