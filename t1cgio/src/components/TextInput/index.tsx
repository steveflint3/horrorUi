import combineClasses from '@util/combineClasses';
import * as React from 'react';
import styles from './index.scss';

interface IProps {
  className?: string;
  id?: string;
  placeHolder?: string;
  label?: string;
  height?: number;
  barColor: 'barKlein' | 'barRoyal';
  labelColor: 'labelRoyal' | 'labelDenim' | 'labelCoalMine';
  multiline: boolean;
  error?: string | null;
  inputType?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMessageChange?: (event: React.ChangeEvent<HTMLDivElement>) => void;
}
const TextInput = (props: IProps) => (
  <div
    className={combineClasses(props.className, styles.textinput, styles[props.labelColor], {
      false: styles.error,
      true: styles[props.barColor],
      value: props.error === '' || props.error === null || props.error === undefined,
    })}>
    <p className={styles.errorText}>{props.error}</p>
    {props.multiline ? (
      <div
        id={props.id}
        data-text={props.placeHolder}
        contentEditable={true}
        style={{maxHeight: props.height, overflowY: 'auto', minHeight: '2em'}}
        onInput={props.handleMessageChange}
      />
    ) : (
      <input
        id={props.id}
        placeholder={props.placeHolder}
        style={{maxHeight: props.height}}
        className={styles.error}
        type={props.inputType}
        onChange={props.handleInputChange}
        required
      />
    )}
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default TextInput;
