import React from 'react';

import styles from './styles.module.scss';

function Burger() {
  return (
    <button type="button" className={styles.burger}>
      <div className={styles.burgerContent} />
      <div className={styles.burgerContent} />
      <div className={styles.burgerContent} />
    </button>
  );
}

export default Burger;
