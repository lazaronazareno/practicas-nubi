import React from 'react';

import Registerv2Button from '../buttons/register_v2/button';
import LoginButton from '../buttons/login/button';

import Burger from './burger/burger';
import Sidebar from './menu/menu';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Registerv2Button />
        <LoginButton />
        <Burger />
      </div>
      <Sidebar />
    </div>
  );
}

export default Header;
