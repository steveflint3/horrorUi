import * as React from 'react';
import {Helmet} from 'react-helmet';

import styles from './home.scss';

import Button from '@components/Button';
import GetStarted from '@components/GetStarted';
import Header from '@components/Header';
import TextContent from '@components/TextContent';
import IconOverview from './IconOverview';
import ThreeDLogos from './ThreeDLogos';

import AgileIcon from '@assets/svg/homeIcons/agile.svg';
import CloudManagementIcon from '@assets/svg/homeIcons/cloudManagement.svg';
import ConsultingIcon from '@assets/svg/homeIcons/consulting.svg';
import TrainingIcon from '@assets/svg/homeIcons/training.svg';
import WorkWithUs from '@components/WorkWithUs';

interface IProps {
  test?: string;
}

const Home = (props: IProps) => (
  <>
    <Helmet>
      <title>Tier 1 Consulting Group</title>
      <meta name="description" content="Information Technology Professional Consulting" />
    </Helmet>
    <Header background="page1">
      <div className={styles.headerContainer}>
        <h1 className={styles.name}>Tier 1 Consulting Group</h1>
        <h3 className={styles.slogan}>Information Technology Professional Consulting </h3>
        <Button text="See What We Do" className={styles.button} to="/services" />
      </div>
    </Header>
    <section className={styles.section}>
      <TextContent title="Want better results?" className={styles.wantBetterResults}>
        <p className={styles.colorCoalMine}>
          Upgrade to an operating model that promotes behavior over stated values, self organization over
          hierarchy, outcomes over processes and continuous over cascading improvements.
        </p>
      </TextContent>
      <div className={styles.quadDisplay}>
        <IconOverview
          title="IT Advisory and Consulting"
          Icon={ConsultingIcon}
          link="/services#advisoryConsulting">
          We can provide assessment of current people, processes and technology to identify areas that can be
          improved to meet your organization’s strategic goals.
        </IconOverview>
        <IconOverview title="Cloud Management" Icon={CloudManagementIcon} link="/services#devSecOps">
          We apply the DevSecOps principles in managing the life cycle of cloud resources including hybrid
          cloud management.
        </IconOverview>
        <IconOverview title="Agile Development" Icon={AgileIcon} link="/services#agile">
          Our development process follows the agile principles which means that our top focus is customer
          satisfaction through early and continuous delivery.
        </IconOverview>
        <IconOverview title="Training" Icon={TrainingIcon} link="http://edu.t1cg.io" external={true}>
          Our commitment to software technology expands into our on-premise programming courses offering
          weekend classes to beginner developers.
        </IconOverview>
      </div>
    </section>
    <WorkWithUs />
    <TextContent title="Stay Current" className={styles.stayCurrent} justify="center">
      <p className={styles.colorCoalMine}>
        We keep ourselves updated with the latest technologies and processes, allowing us to recommend the
        right technology value to our customers.
      </p>
      <Button text="See More" color="secondary" className={styles.seeMore} to="/technology" />
    </TextContent>
    <ThreeDLogos />
    <GetStarted />
  </>
);

export default Home;
