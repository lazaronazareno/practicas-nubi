import React from 'react';

import styles from './styles.module.scss';

function RegisterButton() {
  return (
    <button type="button" className={styles.button}>
      <a className={styles.link} href="https://login.tunubi.com/Register/0">
        Registrate Gratis
      </a>
    </button>
  );
}

export default RegisterButton;
