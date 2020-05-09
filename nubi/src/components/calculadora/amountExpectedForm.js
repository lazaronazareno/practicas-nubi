import React from 'react';

import styles from './styles.module.scss';

function AmountExForm() {
  return (
    <div className={styles.smallContainer}>
      <form>
        <input className={styles.inputNumber} type="number" placeholder="0" name="inicio" />
        <label className={styles.subTitle} htmlFor="inicio">
          Monto estimado (Tarifa Incluída)
        </label>
        <input type="radio" name="ars" value="ar" id="ar" />
        <label className={styles.subTitle} htmlFor="ar">
          ARS
        </label>
        <input type="radio" name="usd" value="dolar" id="dolar" />
        <label className={styles.subTitle} htmlFor="dolar">
          U$S
        </label>
      </form>
    </div>
  );
}

export default AmountExForm;
