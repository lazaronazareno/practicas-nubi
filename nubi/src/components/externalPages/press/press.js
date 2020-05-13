import React from 'react';

import logos from '../../../assets/images/logos_prensa';
import presskitimg from '../../../assets/images/img_presskit_download.svg';

import styles from './styles.module.scss';

function Press() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1 className={styles.textTitle}>Prensa</h1>
      </div>
      <div className={styles.text}>
        <button type="button" className={styles.button}>
          <img src={presskitimg} className={styles.presskitimg} alt="preskit" />
          <a
            className={styles.link}
            href="../../../assets/images/PressKitNubi-20170622T162123Z-001.zip"
            download
          >
            Press Kit
          </a>
        </button>
        <h1 className={styles.smallTitle}>Esto dicen de nosotros</h1>
        <h2 className={styles.smallSubTitle}>
          En caso de querer contactarnos, estaríamos más que contentos en hablar con ustedes. Solo nos tienen
          que escribir a:
        </h2>
        <h2 className={styles.smallSubTitle}>prensa@tunubi.com!</h2>
      </div>
      <div className={styles.pressImgs}>
        {logos.map(({ src, name, text }) => (
          <div key={text} className={styles.imageContainer}>
            <img className={styles.images} src={src} alt="logo" />
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.smallText}>{text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Press;
