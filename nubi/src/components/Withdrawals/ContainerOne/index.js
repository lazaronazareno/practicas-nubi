import React from 'react';

import Containertwo from '../ContainerTwo';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.ContainerWithdrawals}>
          <Containertwo />
        </div>
      </div>
    );
  }
}

export default ContainerOne;
