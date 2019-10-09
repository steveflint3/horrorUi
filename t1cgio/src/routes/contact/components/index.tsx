import * as React from 'react';

import Header from '@components/Header';
import {Helmet} from 'react-helmet';

import ContactForm from '@components/ContactForm';
import styles from './index.scss';
const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us</title>
      <meta name="description" content="Let's get your project started. Contact us today!" />
    </Helmet>
    <Header background="page4" />
    <div className={styles.container}>
      <ContactForm className={styles.form} />
    </div>
    <div className={styles.spacer} />
  </>
);

export default Contact;
