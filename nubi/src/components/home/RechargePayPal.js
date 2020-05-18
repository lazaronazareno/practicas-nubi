import React from 'react';

import VideoButtonRC from '../buttons/video_rechargue/button';
import AboutButton from '../buttons/about/button';

import styles from './styles.module.scss';

function RechargePayPal() {
  return (
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Recargas PayPal</h1>
      <span className={styles.subTitle}>Recargá plata con Nubi, comprá con PayPal</span>
      <div className={styles.buttons}>
        <VideoButtonRC />
        <AboutButton />
      </div>
    </div>
  );
}

export default RechargePayPal;
