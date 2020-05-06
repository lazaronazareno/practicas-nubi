import React from 'react';

import styles from './styles.module.scss';

function LoginButton() {
  return (
    <button type="button" className={styles.button}>
      INICIAR SESIÓN
    </button>
  );
}

export default LoginButton;
