import React from 'react';
import styles from './styles.module.scss';

function Sidebar(){
  return(
    <nav className={styles.menu}>
      <a className={styles.menuText}>Home</a>
      <a className={styles.menuText}>Recargas</a>
      <a className={styles.menuText}>Retiros</a>
      <a className={styles.menuText}>Calculadora</a>
      <a className={styles.menuText}>Blog</a>
      <a className={styles.menuText}>Nosotros</a>
      <a className={styles.menuText}>Ayuda</a>
      <a className={styles.menuText}>Prensa</a>
      <a className={styles.menuText}>Empresas</a>
    </nav>
  )
}

export default Sidebar;
