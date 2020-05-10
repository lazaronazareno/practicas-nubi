import React from 'react';

import RegisterButton from '../buttons/register/button';
import nubi from '../../assets/images/nubi-paypal-logo.svg';

import RetirePayPal from './RetirePayPal';
import RechargePayPal from './RechargePayPal';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainerOne}>
        <img src={nubi} className={styles.logo} alt="nubi" />
        <h1 className={styles.text}>Cobrá con Paypal y retirá a tu banco</h1>
        <RegisterButton />
      </div>
      <div className={styles.subContainerTwo}>
        <RetirePayPal />
        <RechargePayPal />
      </div>
    </div>
  );
}

export default Home;
