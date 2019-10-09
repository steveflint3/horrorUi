import Logo from '@assets/svg/t1cgLogo.svg';
import combineClasses from '@util/combineClasses';
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import MobileNav from './mobilenav';
import styles from './nav.scss';

interface IProps {
  handleClick?: boolean;
}

interface IState {
  showMobileNav: boolean;
  loaded: boolean;
}

class Nav extends React.Component<IProps, IState> {
  public state: IState = {
    loaded: false,
    showMobileNav: false,
  };

  public handleClick = () => {
    this.setState(prevState => ({
      loaded: true,
      showMobileNav: !prevState.showMobileNav,
    }));
  };

  public handleLinkClick = () => {
    this.setState({
      showMobileNav: false,
    });
  };

  render() {
    return (
      <nav
        id="nav"
        className={combineClasses(styles.nav, {
          noTransitions: !this.state.loaded,
        })}>
        <NavLink onClick={this.handleLinkClick} className={styles.home} to="/">
          <Logo className={combineClasses(styles.logo, {[styles.mobileLogo]: this.state.showMobileNav})} />
          <span
            className={combineClasses(styles.name, {
              [styles.mobileName]: this.state.showMobileNav,
            })}>
            Tier 1 Consulting Group
          </span>
        </NavLink>
        <div className={styles.menu}>
          <span
            onClick={this.handleClick}
            className={combineClasses(styles.hamburger, {
              [styles.mobileHamburger]: this.state.showMobileNav,
            })}
          />
          <div className={styles.links}>
            <NavLink className={styles.linkItems} to="/">
              Our Services
            </NavLink>
            <NavLink className={styles.linkItems} to="/">
              Technology
            </NavLink>
            <a
              className={styles.linkItems}
              target="_blank"
              rel="noreferrer"
              href="">
              Careers
            </a>
          </div>
        </div>
        <MobileNav handleLinkClick={this.handleLinkClick} showMobileNav={this.state.showMobileNav} />
      </nav>
    );
  }
}

export default Nav;
