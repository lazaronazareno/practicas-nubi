import React from 'react';

import arrow from '../../assets/images/ic_calculator_arrow.svg';
import RegisterButton from '../buttons/register/button';

import styles from './styles.module.scss';
import AmountExForm from './amountExpectedForm';

class Calculadora extends React.Component {
  state = { amount: '', realAmount: '' };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.amount);
    this.setState({realAmount: this.state.amount * 100 });
    console.log(this.state.realAmount);
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Calculá tu retiro o recarga</h2>
        <div className={styles.subContainer}>
          <div className={styles.smallContainer}>
            <form onSubmit={this.handleSubmit}>
              <input
                className={styles.inputNumber}
                type="number"
                placeholder="0"
                id="inicio"
                value={this.state.amount}
                onChange={(e) => {
                  this.setState({ amount: e.target.value });
                }}
              />
              <button type="submit" className={styles.button}>
                <img className={styles.arrow} src={arrow} alt="arrow" />
              </button>
              <div>
                <label className={styles.subTitle} htmlFor="inicio">
                  Indicá el monton en Dólares
                </label>
                <input type="radio" name="recarga" id="recharge" />
                <label className={styles.subTitle} htmlFor="recharge">
                  RECARGA
                </label>
                <input type="radio" name="retiro" id="retire" />
                <label className={styles.subTitle} htmlFor="retire">
                  RETIRO
                </label>
              </div>
            </form>
          </div>
          <AmountExForm key={this.state.realAmount} number={this.state.realAmount} />
        </div>
        <RegisterButton />
      </div>
    );
  }
}

export default Calculadora;
