import * as React from 'react';

import GetStarted from '@components/GetStarted';
import Header from '@components/Header';
import combineClasses from '@util/combineClasses';
import ThreeDLogo from '../../technology/components/threeDlogo';

import styles from './notFound.scss';

const NotFound = () => (
  <>
    <Header background="page5">
      <div className={styles.headerContent}>
        <h1 className={combineClasses(styles.headerTitle, styles.center)}>Our Technologies</h1>
        <h3 className={combineClasses(styles.headerSubtitle, styles.center)}>
          We use the latest technology to give you the most reliable, scalable and secure applications
          possible{' '}
        </h3>
      </div>
    </Header>
    <main className={styles.main}>
      <div className={styles.subtitle}>
        <h2>The page you are looking for could not be found</h2>
      </div>
      <div className={styles.logoContainer}>
        <ThreeDLogo />
      </div>
    </main>
  </>
);

export default NotFound;
