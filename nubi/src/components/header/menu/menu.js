import React from 'react';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <nav className={styles.menu}>
      {/* @TODO:  Reemplazar el href por el apropiado una vez estén listas las secciones referenciadas. */}
      <a href="#Home" className={styles.menuText}>
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
    </nav>
  );
}

export default Sidebar;
