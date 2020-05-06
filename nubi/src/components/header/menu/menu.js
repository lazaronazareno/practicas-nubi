import React from 'react';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <nav className={styles.menu}>
      <a href="/" className={styles.menuText}>
        Home
      </a>
      <a href="/" className={styles.menuText}>
        Recargas
      </a>
      <a href="/" className={styles.menuText}>
        Retiros
      </a>
      <a href="/" className={styles.menuText}>
        Calculadora
      </a>
      <a href="/" className={styles.menuText}>
        Blog
      </a>
      <a href="/" className={styles.menuText}>
        Nosotros
      </a>
      <a href="/" className={styles.menuText}>
        Ayuda
      </a>
      <a href="/" className={styles.menuText}>
        Prensa
      </a>
      <a href="/" className={styles.menuText}>
        Empresas
      </a>
    </nav>
  );
}

export default Sidebar;
