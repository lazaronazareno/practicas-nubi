import React from 'react';

import Registerv2Button from '../buttons/register_v2/button';
import LoginButton from '../buttons/login/button';

import Burger from './burger/burger';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <Registerv2Button />
      <LoginButton />
      <Burger />
    </div>
  );
}

export default Header;
