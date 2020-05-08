import React from 'react';

import Fondo from '../assets/Retiros.png';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.ContainerWithdrawals}>
          <img src={Fondo} className={styles.fondo} alt="fondo" />
        </div>
      </div>
    );
  }
}

export default ContainerOne;
