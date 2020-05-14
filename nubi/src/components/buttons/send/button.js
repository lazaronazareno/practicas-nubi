import React from 'react';

import styles from './styles.module.scss';

function SendButton() {
  return (
    <button type="button" className={styles.button}>
      Enviar
    </button>
  );
}

export default SendButton;
