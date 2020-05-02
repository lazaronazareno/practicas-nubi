import React from 'react';
import styles from './styles.module.scss';
import videoIcon from '../../../assets/images/ic_play.svg';

function VideoButton() {
  return (
   <button className={styles.button}>
     <img src={videoIcon} className={styles.video} alt="video"/>
     <p1 className={styles.text}>Mirá el video</p1>
     </button>
  );
}

export default VideoButton;
