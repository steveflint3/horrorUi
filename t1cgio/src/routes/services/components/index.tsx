import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {ContactContext} from '@context/ContactForm';

import Header from '@components/Header';
import {Helmet} from 'react-helmet';
import AdvsCnsl from './AdvsCnsl';

import ArrowLink from '@components/ArrowLink';
import Button from '@components/Button';
import GetStarted from '@components/GetStarted';
import SiteAnimation from '@components/SiteAnimation';
import TextContent from '@components/TextContent';
import contact from '@routes/contact';
import CloudManagement from './CloudManagement';
import styles from './index.scss';
class Services extends React.Component<RouteComponentProps> {
  componentDidMount() {
    if (this.props.location.hash) {
      setTimeout(() => {
        document.getElementById(this.props.location.hash.substr(1)).scrollIntoView({inline: 'end'});
        window.scrollTo({left: 0});
      }, 100);
    }
  }

  render() {
    return (
      <ContactContext.Consumer>
        {context => (
          <>
            <Helmet>
              <title>Our Services</title>
              <meta name="description" content="Information Technology Professional Consulting" />
            </Helmet>
            <Header background="page2">
              <TextContent title="What is your OM?" textColor="light" lineColor="cobalt" showLine={true}>
                <p className={styles.headerText}>
                  Every organization has an operating model that determines the level of needed business
                  process integration and standardization. For example, Chipotle has a very different
                  operating model than Facebook. Information Technology choices and solutions must be aligned
                  with the operating model.
                </p>
                <Button text="Get Started" className={styles.getStarted} onClick={context.toggleShow} />
              </TextContent>
            </Header>
            <section className={styles.greyAngle} id="advisoryConsulting">
              <AdvsCnsl toggleContact={context.toggleShow} />
            </section>
            <section className={styles.cloudSection}>
              <CloudManagement />
            </section>
            <section className={styles.agileSection} id="agile">
              <SiteAnimation className={styles.siteAnimation} />
              <TextContent
                title="Improve your business agility"
                subtitle="Agile Development"
                className={styles.agileText}>
                <p>
                  Your needs and the needs of your customers are constantly changing. T1CG can build
                  applications that can change with you.
                </p>
                <p>
                  We believe that the development process is never done and that improvement is always
                  possible. We follow the Agile methodologies that allow and even encourage constant changes
                  to better suit your needs.
                </p>
                <p>
                  We continuously develop and integrate new features and improvements so that your application
                  is always aligned with the specific and ever changing requirements of your clients.
                </p>
                <ArrowLink className={styles.link} to="/about">
                  See how we work
                </ArrowLink>
              </TextContent>
            </section>
            <GetStarted />
          </>
        )}
      </ContactContext.Consumer>
    );
  }
}

export default Services;
