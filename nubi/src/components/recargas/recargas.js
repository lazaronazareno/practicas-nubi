import React from 'react';

import RegisterButton from '../buttons/register/button';
import logos from '../../assets/images/logos';

import styles from './styles.module.scss';

function Recargas() {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <h1 className={styles.title}> Recargá tu cuenta PayPal</h1>
        <h2 className={styles.text}>
          Con Nubi agregá dinero a tu cuneta PayPal desde tu banco y comprá en todo el mundo sin tarjeta de
          crédito. ¡Si no tenés cuenta PayPal creátela desde Nubi en unos simple pasos!
        </h2>
        <h2 className={styles.text}>El costo de la recarga es del 5% + IVA sobre la tarifa.</h2>
        <RegisterButton />
      </div>
      <h1 className={styles.subTitle}>Ahorrá en tus compras online</h1>
      <div className={styles.imagesContainer}>
        {logos.map(({ src, title }) => (
          <div className={styles.imageContainer}>
            <img className={styles.images} src={src} alt="logo" />
            <h1 className={styles.barra}>{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recargas;
