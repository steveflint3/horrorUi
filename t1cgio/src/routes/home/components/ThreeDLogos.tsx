import * as React from 'react';

import styles from './threeDLogos.scss';

// Icons
import AnsibleIcon from '@assets/svg/tech/Ansible.svg';
import AwsIcon from '@assets/svg/tech/Aws.svg';
import DockerIcon from '@assets/svg/tech/Docker.svg';
import GoIcon from '@assets/svg/tech/GoLang.svg';
import JenkinsIcon from '@assets/svg/tech/Jenkins.svg';
import KubeIcon from '@assets/svg/tech/Kubernetes.svg';
import MongoIcon from '@assets/svg/tech/Mongo.svg';
import NewRelicIcon from '@assets/svg/tech/NewRelic.svg';
import NodeIcon from '@assets/svg/tech/Node.svg';
import ReactIcon from '@assets/svg/tech/Reactjs.svg';
import ReduxIcon from '@assets/svg/tech/Redux.svg';
import TerraformIcon from '@assets/svg/tech/Terraform.svg';

const ThreeDLogos = () => (
  <div className={styles.parent}>
    <div className={styles.floor} />
    <JenkinsIcon className={styles.jenkins} />
    <div className={styles.jenkinsShadow} />
    <AnsibleIcon className={styles.ansible} />
    <div className={styles.ansibleShadow} />
    <MongoIcon className={styles.mongo} />
    <div className={styles.mongoShadow} />
    <NewRelicIcon className={styles.newRelic} />
    <div className={styles.newRelicShadow} />
    <NodeIcon className={styles.node} />
    <div className={styles.nodeShadow} />
    <ReduxIcon className={styles.redux} />
    <div className={styles.reduxShadow} />
    <KubeIcon className={styles.kube} />
    <div className={styles.kubeShadow} />
    <TerraformIcon className={styles.terraform} />
    <div className={styles.terraformShadow} />
    <ReactIcon className={styles.react} />
    <div className={styles.reactShadow} />
    <DockerIcon className={styles.docker} />
    <div className={styles.dockerShadow} />
    <GoIcon className={styles.go} />
    <div className={styles.goShadow} />
    <AwsIcon className={styles.aws} />
    <div className={styles.awsShadow} />
  </div>
);

export default ThreeDLogos;
