import React from 'react';

import styles from './styles.module.scss';

class AmountExForm extends React.Component {
  state = { monto: '', realMonto: '', radioButton1: false, radioButton2: false };

  async componentDidMount(props) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "currency": "ars",
        "amount": this.props.number,
        "transaction": "withdraw",
        "transaction_subtype": "withdraw_transfer",
      }),
    };
    const response = await fetch('https://api.tunubi.com/fees/calculate_standard_fee/', requestOptions);
    const data = await response.json();
    this.setState({ monto: data.total_amount });
    this.setState({ realMonto: this.state.monto / 100 });
  }

  render() {
    return (
      <div className={styles.smallContainer}>
        <form>
          <input
            className={styles.inputNumber}
            type="number"
            placeholder={this.state.realMonto ? this.state.realMonto : 'Dolares'}
            name="inicio"
          />
          <label className={styles.subTitle} htmlFor="inicio">
            Monto estimado (Tarifa Incluída)
          </label>
          <input
            type="radio"
            name="ars"
            value="ar"
            id="ar"
            checked={this.state.radioButton1}
            onClick={(e) => {
              this.setState({ radioButton1: !this.state.radioButton1 });
            }}
          />
          <label className={styles.subTitle} htmlFor="ar">
            ARS
          </label>
          <input
            type="radio"
            name="usd"
            value="dolar"
            id="dolar"
            checked={this.state.radioButton2}
            onClick={(e) => {
              this.setState({ radioButton2: !this.state.radioButton2 });
            }}
          />
          <label className={styles.subTitle} htmlFor="dolar">
            U$S
          </label>
        </form>
      </div>
    );
  }
}

export default AmountExForm;
