import React from 'react';
import styles from './styles.module.scss';
import arrow from '../../assets/images/ic_calculator_arrow.svg';
import RegisterButton from '../buttons/register/button';

class Calculadora extends React.Component {
  render(){
  return(
    <div className={styles.container}>
      <h2 className={styles.title}>Calculá tu retiro o recarga</h2>
      <div className={styles.secondContainer}>
      <div className={styles.smallContainer}>
        <form>
        <input className={styles.inputNumber} type="number" placeholder="0" id="inicio"/>
        <label className={styles.subTitle} for="inicio">Indicá el monton en Dólares</label>
        <input  type="radio"/>
        <label className={styles.subTitle}>RECARGA</label>
        <input  type="radio"/>
        <label className={styles.subTitle}>RETIRO</label>
        </form>
      </div>
        <img className={styles.arrow} src={arrow} alt="arrow"/>
        <div className={styles.smallContainer}>
        <form>
        <input className={styles.inputNumber} type="number" placeholder="0" name="inicio"/>
        <label className={styles.subTitle} for="inicio">Monto estimado (Tarifa Incluída)</label>
        <input  type="radio" name="ars" value="ar" id="ar"/>
        <label className={styles.subTitle} for="ar">ARS</label>
        <input  type="radio" name="usd" value="dolar" id="dolar"/>
        <label className={styles.subTitle} for="dolar">U$S</label>
        </form>
      </div>
      </div>
      <RegisterButton/>
    </div>
  );
}
}


export default Calculadora;
