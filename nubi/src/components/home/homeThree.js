import React from 'react';
import styles from './styles.module.scss';
import VideoButton from '../buttons/video/button';
import AboutButton from '../buttons/about/button';

function HomeThree() {
  return (
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Recargas PayPal</h1>
      <p1 className={styles.subTitle}>Recargá plata con Nubi, comprá con PayPal</p1>
      <div className={styles.buttons}>
      <VideoButton/>
      <AboutButton/>
      </div>
    </div>
  );
}

export default HomeThree;
