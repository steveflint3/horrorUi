import combineClasses from '@util/combineClasses';
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './nav.scss';

interface IProps {
  handleClick?: boolean;
  showMobileNav: boolean;
  handleLinkClick(): void;
}

const MobileNav = (props: IProps) => (
  <nav className={combineClasses(styles.mobileNav, {[styles.expand]: props.showMobileNav})}>
    <div
      className={combineClasses(styles.mobileNavList, {[styles.mobileNavListActive]: props.showMobileNav})}>
      <NavLink onClick={props.handleLinkClick} className={styles.listItems} to="/">
        Our Services
      </NavLink>
      <NavLink onClick={props.handleLinkClick} className={styles.listItems} to="/">
        Technology
      </NavLink>
      <a
        onClick={props.handleLinkClick}
        className={styles.listItems}
        target="_blank"
        rel="noreferrer"
        href="/">
        Careers
      </a>
    </div>
    {props.showMobileNav ? <div onClick={props.handleLinkClick} className={styles.outsideBody} /> : null}
  </nav>
);

export default MobileNav;
