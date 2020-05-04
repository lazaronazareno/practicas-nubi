import React from 'react';

import styles from './styles.module.scss';

function RegisterButton() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        Registrate Gratis
      </button>
    </div>
  );
}

export default RegisterButton;
