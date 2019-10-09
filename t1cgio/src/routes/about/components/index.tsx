import combineClasses from '@util/combineClasses';
import * as React from 'react';
import Helmet from 'react-helmet';

import styles from './index.scss';

import code from '@assets/images/about/code_1000_667.png';
import codeWebp from '@assets/images/about/code_1000_667.webp';

import laptop from '@assets/images/about/laptop_1000_596.png';
import laptopWebp from '@assets/images/about/laptop_1000_596.webp';

import Header from '@components/Header';
import Join from './Join';

const About = () => (
  <>
    <Helmet>
      <title>About T1CG</title>
      <meta
        name="description"
        content="Learn about Tier 1 Consulting Group, what we do, and how you can join our team"
      />
    </Helmet>
    <Header background="page5" />
    <div className={styles.aboutUs}>
      <div className={combineClasses(styles.text, styles.content)}>
        <h2>Tier 1 Consulting Group</h2>
        <h1>Changing the culture of software development</h1>
        <p>
          T1CG is a small, domestic technology services provider, primarily focused on supporting the
          healthcare IT industry, with core strength in helping organizations transition from the traditional
          command and control process orientation to the practice of Agile values and behaviors.
        </p>
        <p>
          Although many organizations large and small have adopted Agile-like ceremonies, tools, and methods,
          without the needed culture change from top to bottom, the outcome will be inconsistent and
          ephemeral.
        </p>
      </div>
      <div className={combineClasses(styles.content)}>
        <picture>
          <source srcSet={laptopWebp} type={'image/webp'} />
          <img src={laptop} alt="A laptop keyboard" />
        </picture>
      </div>
      <div className={combineClasses(styles.text, styles.content)}>
        <h1>Work Differently</h1>
        <p>
          We believe in greater autonomy as a company in which many of the decisions are derived from the
          bottom-up, with high-trust among collaborators and a focus on outcomes rather than processes.
        </p>
        <p>
          The T1CG members have espoused the Agile manifesto and demonstrates their passion with continuous
          learning &amp; improvement by learning to become more self-organizing, and realizing that
          transformation starts from within.
        </p>
      </div>
      <div className={combineClasses(styles.content)}>
        <picture className={styles.img2}>
          <source srcSet={codeWebp} type={'image/webp'} />
          <img src={code} alt="Code on a black background" />
        </picture>
        <div className={styles.box}>
          <div className={combineClasses(styles.smallBox, styles.sBox2)} />
          <div className={combineClasses(styles.smallBox, styles.sBox3)} />
          <div className={combineClasses(styles.smallBox, styles.sBox4)} />
        </div>
      </div>
    </div>
    <Join />
  </>
);

export default About;

// <div className={styles.row1}>
//   <div className={styles.text}>
//     <h2>Tier 1 Consulting Group </h2>
//     <h1>Changing the culture of software development</h1>
//     <p>
//       T1CG is a small, domestic technology services provider, primarily focused on supporting the
//       healthcare IT industry, with core strength in helping organizations transition from the traditional
//       command and control process orientation to the practice of Agile values and behaviors.
//     </p>
//     <p>
//       Although many organizations large and small have adopted Agile-like ceremonies, tools, and methods,
//       without the needed culture change from top to bottom, the outcome will be inconsistent and
//       ephemeral.
//     </p>
//   </div>
//   <div className={combineClasses(styles.pic, styles.right)} />
// </div>
// <br />
// <div className={styles.row2}>
//   <div className={combineClasses(styles.text, styles.right)}>
//     <h1>Changing the culture of software development</h1>
//     <p>
//       We believe in greater autonomy as a company in which many of the decisions are derived from the
//       bottom-up, with high-trust among collaborators and a focus on outcomes rather than processes.{' '}
//     </p>
//     <p>
//       The T1CG members have espoused the Agile manifesto and demonstrates their passion with continuous
//       learning & improvement, by learning to become more self-organizing, and realizing that
//       transformation starts from within.
//     </p>
//   </div>
//   <div className={combineClasses(styles.pic, styles.left)} />
// </div>
// <div className={styles.box}>
//   <div className={combineClasses(styles.smallBox, styles.sBox2)} />
//   <div className={combineClasses(styles.smallBox, styles.sBox3)} />
//   <div className={combineClasses(styles.smallBox, styles.sBox4)} />
// </div>
// <Join />
