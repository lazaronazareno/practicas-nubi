import React from 'react';

import styles from './styles.module.scss';
import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo';

function Blog() {
  return (
    <div className={styles.Blog}>
      <ContainerOne />
      <ContainerTwo />
    </div>
  );
}

export default Blog;
