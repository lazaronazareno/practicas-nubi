import React from 'react';
import styles from './styles.module.scss';
import videoIcon from '../../../assets/images/ic_play.svg';

function VideoButton() {
  return (
  <button className={styles.button}>
     <img src={videoIcon} className={styles.video} alt="video"/>
     <span>Mirá el video</span>
  </button>
  );
}

export default VideoButton;
