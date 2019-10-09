import * as React from 'react';
import styles from './join.scss';

import Button from '@components/Button';

const Join = () => (
  <div className={styles.join}>
    <div className={styles.text}>
      <h1>Join Our Team</h1>
      <p>
        At T1CG, we are always looking for new members who share our values and want to be a part of a company
        where their opinion matters and their voice is heard.
      </p>
      <br />
      <p>
        We welcome new ideas, constant learning and exploring the cutting-edge technological frontiers that
        drive our industry.
      </p>
    </div>
    <div className={styles.button}>
      <Button text="See Open Positions" to="https://t1cg.bamboohr.com/jobs/" external={true} />
    </div>
  </div>
);

export default Join;
