import React from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.ContainerWithdrawals} />
      </div>
    );
  }
}

export default ContainerOne;
