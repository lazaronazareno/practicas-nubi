import React from 'react';

import arrow from '../../assets/images/ic_calculator_arrow.svg';
import RegisterButton from '../buttons/register/button';

import styles from './styles.module.scss';
import AmountExForm from './amountExpectedForm';

class Calculadora extends React.Component {
  state = { amount: '', realAmount: '', radioButton1: false, radioButton2: true };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.amount);
    this.setState({ realAmount: this.state.amount * 100 });
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
                placeholder="Dolares"
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
                  Indicá el monto en Dolares
                </label>
                <input
                  type="radio"
                  name="recarga"
                  id="recharge"
                  checked={this.state.radioButton1}
                  onClick={(e) => {
                    this.setState({ radioButton1: this.state.radioButton1 });
                  }}
                />
                <label className={styles.subTitle} htmlFor="recharge">
                  RECARGA
                </label>
                <input
                  type="radio"
                  name="retiro"
                  id="retire"
                  checked={this.state.radioButton2}
                  onClick={(e) => {
                    this.setState({ radioButton2: this.state.radioButton2 });
                  }}
                />
                <label className={styles.subTitle} htmlFor="retire">
                  RETIRO
                </label>
              </div>
            </form>
          </div>
          <AmountExForm
            key={this.state.realAmount}
            number={this.state.realAmount}
            pesos={this.state.amount}
          />
        </div>
        <RegisterButton />
      </div>
    );
  }
}

export default Calculadora;
