import React from 'react';

import videoIcon from '../../../assets/images/ic_play.svg';

import styles from './styles.module.scss';

function VideoButton() {
  return (
    <button type="button" className={styles.button}>
      <img src={videoIcon} className={styles.video} alt="video" />
      <span>Mirá el video</span>
    </button>
  );
}

export default VideoButton;
