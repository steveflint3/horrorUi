import Mail from '@assets/svg/footerIcons/mailIcon.svg';
import Phone from '@assets/svg/footerIcons/phoneIcon.svg';
import Logo from '@assets/svg/t1cgLogo.svg';
import combineClasses from '@util/combineClasses';
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './index.scss';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.home}>
      <Logo className={styles.logo} />
      <span className={combineClasses(styles.name, styles.colorMercury)}>
        TIER 1 <br />
        CONSULTING <br /> GROUP
      </span>
    </div>
    <div className={combineClasses(styles.links, styles.gridMargin)}>
      <ul className={styles.listLinks}>
        <li>
          <NavLink className={combineClasses(styles.linkItems, styles.colorMercury)} to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className={combineClasses(styles.linkItems, styles.colorMercury)} to="/services">
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink className={combineClasses(styles.linkItems, styles.colorMercury)} to="/technology">
            Our Technology
          </NavLink>
        </li>
        <li>
          <a
            className={combineClasses(styles.linkItems, styles.colorMercury)}
            rel="noreferrer"
            href="https://t1cg.bamboohr.com/jobs/">
            Careers
          </a>
        </li>
      </ul>
    </div>
    <div className={combineClasses(styles.office, styles.gridMargin)}>
      <h3 className={styles.colorMercury}>Columbia Office</h3>
      <p className={styles.colorMercury}>10420 Little Patuxent Pkwy</p>
      <p className={styles.colorMercury}>Suite 440</p>
      <p className={styles.colorMercury}>Columbia, MD 21044</p>
    </div>
    <div className={combineClasses(styles.office, styles.office2, styles.gridMargin)}>
      <h3 className={styles.colorMercury}>Sterling Office</h3>
      <p className={styles.colorMercury}>2 Pidgeon Hill Drive</p>
      <p className={styles.colorMercury}>Suite 210</p>
      <p className={styles.colorMercury}>Sterling, VA 20165</p>
    </div>
    <div className={combineClasses(styles.contact, styles.gridMargin)}>
      <h3 className={styles.colorMercury}>Contact Info</h3>
      <span>
        <Mail /> <span className={combineClasses(styles.colorMercury, styles.contactText)}>info@t1cg.io</span>
      </span>
      <span>
        <Phone />{' '}
        <span className={combineClasses(styles.colorMercury, styles.contactText)}>410 - 910 - 2531</span>
      </span>
    </div>
    <div className={styles.copyright}>
      <p className={styles.colorMercury}>&copy; 2019 Tier 1 Consulting Group. All Right Reserved.</p>
    </div>
  </footer>
);

export default Footer;
