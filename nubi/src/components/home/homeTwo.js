import React from 'react';

import VideoButton from '../buttons/video/button';
import AboutButton from '../buttons/about/button';

import styles from './styles.module.scss';

function HomeTwo() {
  return (
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Retiros PayPal</h1>
      <span className={styles.subTitle}>Vende con PayPal, retirá tu plata con Nubi</span>
      <div className={styles.buttons}>
        <VideoButton />
        <AboutButton />
      </div>
    </div>
  );
}

export default HomeTwo;
