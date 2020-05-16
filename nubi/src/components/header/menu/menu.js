import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import styles from './styles.module.scss';

const history = createBrowserHistory();

function Sidebar(props) {
  let menuClasses = styles.menu;
  if (props.show === false) {
    menuClasses = styles.closed;
  }
  return (
    <Router history={history} forceRefresh>
      <div className={menuClasses}>
        <Link to="/" className={styles.menuText}>
          Home
        </Link>
        <Link to="/Recargas" className={styles.menuText}>
          Recargas
        </Link>
        <Link to="/Retiros" className={styles.menuText}>
          Retiros
        </Link>
        <Link to="/Calculadora" className={styles.menuText}>
          Calculadora
        </Link>
        <Link to="/Blog" className={styles.menuText}>
          Blog
        </Link>
        <Link to="/Us" className={styles.menuText}>
          Nosotros
        </Link>
        <Link to="/Help" className={styles.menuText}>
          Ayuda
        </Link>
        <Link to="/Press" className={styles.menuText}>
          Prensa
        </Link>
        <Link to="/Enterpraise" className={styles.menuText}>
          Empresas
        </Link>
      </div>
    </Router>
  );
}

export default Sidebar;
