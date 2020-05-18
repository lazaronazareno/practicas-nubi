import React from 'react';

import titleLogo from '../../../assets/images/paypal-nubi-logos.svg';
import elogos from '../../../assets/images/logos_enterprise';
import SendButton from '../../buttons/send/button';

import styles from './styles.module.scss';

class Enterprise extends React.Component {
  state = {
    nameValue: '',
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <img className={styles.titleLogo} src={titleLogo} alt="titleLogo" />
          <h1 className={styles.textTitle}>Ofrecé PayPal y facilitá el pago a tus clientes extranjeros</h1>
          <h2 className={styles.smallTextTitle}>y retirá con Nubi a tu banco en Argentina.</h2>
        </div>
        <div>
          <h2 className={styles.subTitle}>
            Abrí una cuenta para ofrecer a tus clientes <strong>opciones de pago seguras</strong> y vendé más
            con
            <strong> PayPal. </strong>Accedé a nuestras <strong>tarifas preferenciales</strong> y comenzá a
            <strong> hacer crecer tu negocio</strong>
          </h2>
          <div className={styles.elogosContainer}>
            {elogos.map(({ src, name, secondname }) => (
              <div key={name} className={styles.imagesContainer}>
                <img className={styles.images} src={src} alt="logo" />
                <h2 className={styles.name}>
                  <strong>{name} </strong>
                  {secondname}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subContainer}>
          <h2 className={styles.subTitle}>
            Escribinos y accedé a nuestras <i>tarifas preferenciales</i>
          </h2>
          <form className={styles.form}>
            <label htmlFor="name">
              <strong>Nombre y Apellido</strong>
            </label>
            <input
              type="text"
              id="name"
              value={this.state.nameValue}
              onChange={(e) => {
                let nameValue = e.target.value;
                nameValue = nameValue.replace(/[^A-Za-z]/, '');
                this.setState({
                  nameValue,
                });
              }}
            />
            <label htmlFor="web">
              <strong>Web de la empresa</strong>
            </label>
            <input id="web" className={styles.input} />
            <div className={styles.smallForm}>
              <div className={styles.column}>
                <label htmlFor="tel">
                  <strong>Teléfono</strong>
                </label>
                <input id="tel" type="number" className={styles.input} />
              </div>
              <div className={styles.column}>
                <label htmlFor="mail">
                  <strong>Mail</strong>
                </label>
                <input type="email" id="mail" className={styles.input} />
              </div>
            </div>
            <div className={styles.smallRadioForm}>
              <label htmlFor="confirm">
                <strong>¿Tenés cuenta en PayPal?</strong>
              </label>
              <div className={styles.smallForm}>
                <input id="confirmYes" type="radio" />
                <label htmlFor="confirmYes">
                  <strong>Si</strong>
                </label>
                <input id="confirmNo" type="radio" />
                <label htmlFor="confirmNo">
                  <strong>No</strong>
                </label>
              </div>
              <SendButton className={styles.button} type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Enterprise;
