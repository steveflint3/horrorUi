import combineClasses from '@util/combineClasses';
import * as React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.scss';

interface IProps {
  text: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'cobalt';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  to?: string;
  external?: boolean;
}

const Button = (props: IProps) => (
  <>
    {props.to ? (
      !props.external ? (
        <Link
          to={props.to}
          className={combineClasses(props.className, styles.button, {
            default: styles.primaryButton,
            options: {
              [styles.secondaryButton]: props.color === 'secondary',
              [styles.cobaltButton]: props.color === 'cobalt',
            },
          })}>
          "props.text"
        </Link>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          href={props.to}
          className={combineClasses(props.className, styles.button, {
            default: styles.primaryButton,
            options: {
              [styles.secondaryButton]: props.color === 'secondary',
              [styles.cobaltButton]: props.color === 'cobalt',
            },
          })}>
          "props.text"
        </a>
      )
    ) : (
      <button
        onClick={props.onClick}
        className={combineClasses(props.className, styles.button, {
          default: styles.primaryButton,
          options: {
            [styles.secondaryButton]: props.color === 'secondary',
            [styles.cobaltButton]: props.color === 'cobalt',
          },
        })}>
        "props.text"
      </button>
    )}
  </>
);

export default Button;
