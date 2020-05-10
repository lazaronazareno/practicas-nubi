import React from 'react';

import RegisterButton from '../../buttons/register/button';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <h1 className={styles.title1}>Tu cuenta Nubi en sólo 2 minutos</h1>
        <RegisterButton />
      </div>
    );
  }
}

export default ContainerOne;
