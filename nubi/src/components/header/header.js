import React from 'react';

import styles from './styles.module.scss';
import Sidebar from './menu/menu';

function Header() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}

export default Header;
