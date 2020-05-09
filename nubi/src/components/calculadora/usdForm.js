import React from 'react';

import { fees } from '../../services/fees';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class UsdForm extends React.Component {
  state = { amount: '' };

  async componentDidMount() {
    const response = await fees();
    this.setState({ amount: response.data.results });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.amount);
  };

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  render() {
    return (
      <div className={styles.smallContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.inputNumber}
            type="number"
            placeholder="0"
            id="inicio"
            onChange={this.handleChange}
          />
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
        </form>
      </div>
    );
  }
}

export default UsdForm;
