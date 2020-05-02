import React from 'react';
import styles from './styles.module.scss';

function Burger() {
  return (
    <button className={styles.burger}>
      <div className={styles.burgerContent}></div>
      <div className={styles.burgerContent}></div>
      <div className={styles.burgerContent}></div>
    </button>
  );
}

export default Burger;
