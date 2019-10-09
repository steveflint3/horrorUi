import * as React from 'react';
import Helmet from 'react-helmet';

import GetStarted from '@components/GetStarted';
import Header from '@components/Header';
import combineClasses from '@util/combineClasses';
import ThreeDLogo from './threeDlogo';

import styles from './technology.scss';

const Technology = () => (
  <>
    <Helmet>
      <title>Technology</title>
      <meta
        name="description"
        content="The latest technology to give you the most reliable, scalable and secure applications possible"
      />
    </Helmet>
    <Header background="page3">
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
        <h2>Coming Soon</h2>
      </div>
      <div className={styles.logoContainer}>
        <ThreeDLogo />
      </div>
    </main>

    <GetStarted />
  </>
);

export default Technology;
