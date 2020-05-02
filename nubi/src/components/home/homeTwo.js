import React from 'react';
import styles from './styles.module.scss';
import VideoButton from '../buttons/video/button';
import AboutButton from '../buttons/about/button';

function HomeTwo() {
  return (
    <div className={styles.containerSection}>
      <h1 className={styles.title}>Retiros PayPal</h1>
      <p1 className={styles.subTitle}>Vende con PayPal, retirá tu plata con Nubi</p1>
      <div className={styles.buttons}>
      <VideoButton/>
      <AboutButton/>
      </div>
    </div>
  );
}

export default HomeTwo;
