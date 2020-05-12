import React from 'react';

import styles from './styles.module.scss';

function Terms() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1 className={styles.textTitle}>Términos y Condiciones</h1>
      </div>
      <div className={styles.text}>letras azules</div>
      <div className={styles.smallContainer}>
        <h1 className={styles.smallTitle}>titulo</h1>
        <h2 className={styles.smallText}>texto</h2>
      </div>
    </div>
  );
}

export default Terms;
