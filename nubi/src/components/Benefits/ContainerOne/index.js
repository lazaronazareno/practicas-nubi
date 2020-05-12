import React from 'react';

import RegisterButton from '../../buttons/register/button';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.containerBenefits}>
          <div className={styles.contOne}>
            <h1 className={styles.title}>Ràpido.</h1>
            <div className={styles.hr} />
            <p>Realizá tu recarga o retiro de tu cuenta PayPal con solo unos clicks.</p>
          </div>
          <div className={styles.contTwo}>
            <h1 className={styles.title}>Simple.</h1>
            <div className={styles.hr} />
            <p>
              Olvidate de los papeleos inagotables. Con Nubi hacé todo en 4 simples pasos desde donde quieras.
            </p>
          </div>
          <div className={styles.contThree}>
            <h1 className={styles.title}>Seguro.</h1>
            <div className={styles.hr} />
            <p>
              Contamos con monitoreo de fraudes 24/7 y cubrimos 100% de las transacciones no autorizadas
              verificadas.
            </p>
          </div>
          <div className={styles.contFour}>
            <h1 className={styles.title}>Transparente.</h1>
            <div className={styles.hr} />
            <p>Conocé dónde está tu dinero en todo momento. Sin comisiones ocultas.</p>
          </div>
          <div className={styles.button}>
            <RegisterButton />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerOne;
