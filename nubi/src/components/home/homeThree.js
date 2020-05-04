import React from 'react';

import VideoButton from '../buttons/video/button';
import AboutButton from '../buttons/about/button';

import styles from './styles.module.scss';

function HomeThree() {
  return (
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Recargas PayPal</h1>
      <span className={styles.subTitle}>Recargá plata con Nubi, comprá con PayPal</span>
      <div className={styles.buttons}>
        <VideoButton />
        <AboutButton />
      </div>
    </div>
  );
}

export default HomeThree;
