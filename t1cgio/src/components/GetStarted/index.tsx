import * as React from 'react';

import {ContactContext} from '../../global/context/ContactForm';

import Button from '../Button/index';
import styles from './index.scss';

const GetStarted = () => (
  <ContactContext.Consumer>
    {contact => (
      <div className={styles.getStarted}>
        <div className={styles.tcb}>
          <p className={styles.title}>Ready to get Started?</p>
          <p>Find out how we can help</p>
          <Button text={'Talk to Us'} onClick={contact.toggleShow} />
        </div>
      </div>
    )}
  </ContactContext.Consumer>
);

export default GetStarted;
