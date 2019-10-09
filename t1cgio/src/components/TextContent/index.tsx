import combineClasses from '@util/combineClasses';
import * as React from 'react';
import styles from './textContent.scss';

interface IProps {
  title: string;
  showLine?: boolean;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  justify?: 'left' | 'center' | 'right';
  textColor?: 'light' | 'dark';
  lineColor?: string;
  titleSpacing?: 0 | 20 | 30 | 50;
  id?: string;
}

const TextContent = (props: IProps) => (
  <div
    className={combineClasses(props.className, {
      default: styles.justifyLeft,
      options: {
        [styles.justifyRight]: props.justify === 'right',
        [styles.justifyCenter]: props.justify === 'center',
      },
    })}>
    <p
      id={props.id}
      className={combineClasses(styles.subtitleText, {
        default: styles.lightBlueSubtitleText,
        options: {
          [styles.mercury]: props.textColor === 'light',
        },
      })}>
      {props.subtitle}
    </p>
    <h2
      className={combineClasses(
        styles.titleText,
        styles[`lineColor${props.lineColor}`],
        {
          default: styles.blueTitleText,
          options: {
            [styles.mercury]: props.textColor === 'light',
          },
        },
        {
          default: styles.dividerDark,
          options: {
            [styles.dividerLight]: props.textColor === 'light',
          },
          use: !!props.showLine,
        },
        {
          default: styles.titlePadSmall,
          options: {
            [styles.titlePadLarge]: props.titleSpacing === 50,
            [styles.titlePadMedium]: props.titleSpacing === 30,
            [styles.titlePadNone]: props.titleSpacing === 0,
          },
          use: !!props.showLine,
        }
      )}>
      {props.title}
    </h2>
    <div
      className={combineClasses(
        {
          default: styles.grayContentText,
          options: {
            [styles.lightContentText]: props.textColor === 'light',
          },
        },
        {
          default: styles.contentPadSmall,
          options: {
            [styles.contentPadLarge]: props.titleSpacing === 50,
            [styles.contentPadMedium]: props.titleSpacing === 30,
            [styles.contentPadNone]: props.titleSpacing === 0,
          },
        }
      )}>
      {props.children}
    </div>
  </div>
);

export default TextContent;
