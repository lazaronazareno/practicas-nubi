import React from 'react';

import styles from './styles.module.scss';

function LoginButton() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        INICIAR SESIÓN
      </button>
    </div>
  );
}

export default LoginButton;
