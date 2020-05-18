import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function AboutButton() {
  return (
    <button type="button" className={styles.button}>
      <Link className={styles.link} to="/Terminos">Ver más</Link>
    </button>
  );
}

export default AboutButton;
