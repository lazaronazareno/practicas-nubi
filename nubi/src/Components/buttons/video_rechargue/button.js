import React from 'react';

import videoIcon from '../../../assets/images/ic_play.svg';

import styles from './styles.module.scss';

function VideoButtonRC() {
  return (
    <button type="button" className={styles.button}>
      <img src={videoIcon} className={styles.video} alt="video" />
      <a className={styles.link} href="https://www.youtube.com/watch?v=gO7ci4Pqg3A">
        Mirá el video
      </a>
    </button>
  );
}

export default VideoButtonRC;
