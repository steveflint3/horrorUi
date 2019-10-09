import * as React from 'react';

import desktopPng1208 from '@assets/images/devSecOps/devSecOps_desktop_1208_491.png';
import desktopWebp1208 from '@assets/images/devSecOps/devSecOps_desktop_1208_491.webp';

import desktopPng1920 from '@assets/images/devSecOps/devSecOps_desktop_1920_780.png';
import desktopWebp1920 from '@assets/images/devSecOps/devSecOps_desktop_1920_780.webp';

import mobilePng from '@assets/images/devSecOps/devSecOps_768_1229.png';
import mobileWebP from '@assets/images/devSecOps/devSecOps_768_1229.webp';

import ArrowLink from '@components/ArrowLink';
import TextContent from '@components/TextContent';
import styles from './CloudManagement.scss';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') >= 0 || window.navigator.userAgent.indexOf('Trident') >= 0;

interface IState {
  small: boolean;
}

class CloudManagement extends React.Component<{}, IState> {
  state = {small: isIE && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768};

  componentDidMount() {
    if (isIE) {
      window.onresize = () => {
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w < 768 && !this.state.small) {
          this.setState({small: true});
        } else if (w >= 768 && this.state.small) {
          this.setState({small: false});
        }
      };
    }
  }

  componentWillUnmount() {
    if (isIE) {
      window.onresize = undefined;
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box} id="devSecOps">
          <TextContent
            showLine={true}
            titleSpacing={50}
            title="DevSecOps"
            subtitle="Cloud Management"
            className={styles.text}>
            <p className={styles.paragraph}>
              Our approach to DevSecOps is that all IT services related to security as well as operations and
              maintenance are tasks that can be solved by developing software systems. In other words, IT
              service management tasks are incrementally and iteratively automated. We employ practices such
              as Site Reliability Engineering, Infrastructure-as-Code, Configuration-as-code, and Continuous
              Integration &amp; Continuous Delivery.
            </p>
            <ArrowLink className={styles.link} to="/technology">
              Learn more about our technology
            </ArrowLink>
          </TextContent>
          <div className={styles.boxes} />
        </div>
        <picture className={styles.picture}>
          <source media="(min-width: 1209px)" srcSet={desktopWebp1920} type="image/webp" />
          <source media="(min-width: 1209px)" srcSet={desktopPng1920} />
          <source media="(min-width: 768px)" srcSet={desktopWebp1208} type="image/webp" />
          <source media="(min-width: 768px)" srcSet={desktopPng1208} />
          <source media="(min-width: 0px)" srcSet={mobileWebP} type="image/webp" />
          <source media="(min-width: 0px)" srcSet={mobilePng} />
          <img
            src={this.state.small ? mobilePng : desktopPng1920}
            className={styles.image}
            alt={'A computer connected pushing code to servers the cloud'}
          />
        </picture>
      </div>
    );
  }
}

export default CloudManagement;
