import React from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.ContainerFooter}>
          <div className={styles.title}>
            <h1 className={styles.title1}>Seguinos!</h1>
          </div>
          <div className={styles.button}>
            <button type="button" className={styles.button1}>
              Ayuda
            </button>
            <button type="button" className={styles.button2}>
              Terminos y condiciones
            </button>
            <button type="button" className={styles.button3}>
              Nosotros
            </button>
            <button type="button" className={styles.button4}>
              Privacidad
            </button>
            <button type="button" className={styles.button5}>
              Nustro Blog
            </button>
            <button type="button" className={styles.button6}>
              Prensa
            </button>
          </div>
          <div className={styles.logos}>
            <button type="button" className={styles.button7} />
            <button type="button" className={styles.button8} />
            <button type="button" className={styles.button9} />
            <button type="button" className={styles.button10} />
          </div>
          <div className={styles.logos2}>
            <div className={styles.Nubi} />
            <div className={styles.Paypal} />
            <p className={styles.text}>Copyrigth © 2017 Nubi S.A</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerOne;
