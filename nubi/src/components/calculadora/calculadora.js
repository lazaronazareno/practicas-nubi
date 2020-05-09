import React from 'react';

import arrow from '../../assets/images/ic_calculator_arrow.svg';
import RegisterButton from '../buttons/register/button';

import styles from './styles.module.scss';
import UsdForm from './usdForm';
import AmountExForm from './amountExpectedForm';

function Calculadora() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Calculá tu retiro o recarga</h2>
      <div className={styles.subContainer}>
        <UsdForm />
        <img className={styles.arrow} src={arrow} alt="arrow" />
        <AmountExForm />
      </div>
      <RegisterButton />
    </div>
  );
}

export default Calculadora;
