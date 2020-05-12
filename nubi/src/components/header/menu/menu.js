import React from 'react';

import styles from './styles.module.scss';

function Sidebar(props) {
  let menuClasses = styles.menu;
  if (props.show === false) {
    menuClasses = styles.closed;
  }
  return (
    <div className={menuClasses}>
      <a href="/" className={styles.menuText}>
        Home
      </a>
      <a href="#Recargas" className={styles.menuText}>
        Recargas
      </a>
      <a href="#retire" className={styles.menuText}>
        Retiros
      </a>
      <a href="#calculadora" className={styles.menuText}>
        Calculadora
      </a>
      <a href="/blog" className={styles.menuText}>
        Blog
      </a>
      <a href="/us" className={styles.menuText}>
        Nosotros
      </a>
      <a href="/help" className={styles.menuText}>
        Ayuda
      </a>
      <a href="/comunication" className={styles.menuText}>
        Prensa
      </a>
      <a href="/companies" className={styles.menuText}>
        Empresas
      </a>
    </div>
  );
}

export default Sidebar;
