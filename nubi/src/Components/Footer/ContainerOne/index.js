import React from 'react';
import { Link } from 'react-router-dom';

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
              <a href="https://soporte.tunubi.com/hc/es" className={styles.footerLink}>
                Ayuda
              </a>
            </button>
            <button type="button" className={styles.button2}>
              <Link className={styles.footerLinkT} to="/Terminos">
                Terminos y condiciones
              </Link>
            </button>
            <button type="button" className={styles.button3}>
              <Link className={styles.footerLink} to="/Nosotros">
                Nosotros
              </Link>
            </button>
            <button type="button" className={styles.button4}>
              <Link className={styles.footerLink} to="/Privacidad">
                Privacidad
              </Link>
            </button>
            <button type="button" className={styles.button5}>
              <Link className={styles.footerLink} to="/Blog">
                Nustro Blog
              </Link>
            </button>
            <button type="button" className={styles.button6}>
              <Link className={styles.footerLink} to="/Prensa">
                Prensa
              </Link>
            </button>
          </div>
          <div className={styles.logos}>
            <button type="button" className={styles.button7}>
              <a className={styles.socialLink} href="http://www.instagram.com/nubiok">
                |
              </a>
            </button>
            <button type="button" className={styles.button8}>
              <a className={styles.socialLink} href="http://twitter.com/nubiok">
                |
              </a>
            </button>
            <button type="button" className={styles.button9}>
              <a className={styles.socialLink} href="https://www.facebook.com/nubiok">
                |
              </a>
            </button>
            <button type="button" className={styles.button10}>
              <a className={styles.socialLink} href="https://www.youtube.com/c/Nubiok">
                |
              </a>
            </button>
          </div>
          <div className={styles.logos2}>
            <div className={styles.Nubi}>
              <a className={styles.link} href="https://www.paypal.com/ar/home">
                /
              </a>
            </div>
            <div className={styles.Paypal} />
            <p className={styles.text}>Copyrigth © 2017 Nubi S.A</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerOne;
