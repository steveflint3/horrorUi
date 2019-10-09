import * as React from 'react';

import Button from '../Button/index';
import TextContent from '../TextContent/index';

import deskPic1400W from '@assets/images/workWithUs/deskPic1400.webp';

import deskPic700P from '@assets/images/workWithUs/deskPic700.png';
import deskPic700W from '@assets/images/workWithUs/deskPic700.webp';

import deskPic400P from '@assets/images/workWithUs/deskPic400.png';
import deskPic400W from '@assets/images/workWithUs/deskPic400.webp';

import styles from './index.scss';

const WorkWithUs = () => (
  <div className={styles.mainContainer}>
    <div className={styles.background} />
    <TextContent className={styles.textContent} textColor={'light'} titleSpacing={20} title={'Work with us'}>
      <p>
        At T1CG, we work with organizations to transition from the traditional command and control process
        orientation to the practice of Agile values and behaviors.
      </p>
      <Button to="/about" color={'cobalt'} className={styles.learnMore} text={'Learn More'} />
    </TextContent>
    <div className={styles.imageContainer}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${deskPic700W}, ${deskPic1400W} 1.5x`}
          type={'image/webp'}
        />
        <source media="(min-width: 768px)" srcSet={deskPic700P} type={'image/png'} />
        <source media="(min-width: 0)" srcSet={deskPic400W} type={'image/webp'} />
        <source media="(min-width: 0)" srcSet={deskPic400P} type={'image/png'} />
        <img src={deskPic700P} alt="Office Space Picture" />
      </picture>
    </div>
  </div>
);

export default WorkWithUs;
