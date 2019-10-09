import * as React from 'react';

import Button from '@components/Button';
import TextContent from '@components/TextContent';
import AdvsCnslLi from './AdvsCnslLi';

import styles from './advsCnsl.scss';

// const styles = import('./advsCnsl.scss');

interface IProps {
  toggleContact: () => void;
}

const AdvsCnsl = ({toggleContact}: IProps) => (
  <>
    <div className={styles.advsCnsl}>
      <TextContent
        className={styles.content}
        title="IT Advisory and Consulting"
        subtitle="Derive your business value"
        textColor="dark">
        <p className={styles.textContent}>
          It isn’t always easy to plan for the future and it can be difficult to take a step back and see the
          big picture when you are deep into development.
        </p>
        <p className={styles.textContent}>We can help.</p>
        <p className={styles.textContent}>
          We’ll assess your current employees, processes and technologies to identify areas that can be
          improved based on real data. Once we have completed our assessment, we will provide recommendations
          based on your organization’s goals and objectives and put you on the track to success.
        </p>
        <Button
          color={'secondary'}
          className={styles.button}
          text="Take the first step"
          onClick={toggleContact}
        />
      </TextContent>
      <ul className={styles.checkList}>
        <AdvsCnslLi
          text="Assessment of current people, processes, 
          and technologies"
        />
        <AdvsCnslLi
          text="Identification of areas of improvement 
          based on data"
        />
        <AdvsCnslLi
          text="Recommendation based on the alignment 
          of the organization’s strategic goals"
        />
        <AdvsCnslLi text="Roadmap planning to the To-Be state" />
        <AdvsCnslLi text="Implementation guidance and assistance" />
      </ul>
    </div>
  </>
);

export default AdvsCnsl;
