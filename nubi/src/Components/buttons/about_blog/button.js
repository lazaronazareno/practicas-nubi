import React from 'react';

import styles from './styles.module.scss';

function AboutBlogButton() {
  return (
    <button type="button" className={styles.button}>
      <a className={styles.link} href="https://blog.tunubi.com">Ver Blog</a>
    </button>
  );
}

export default AboutBlogButton;
