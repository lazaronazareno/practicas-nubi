import React from 'react';
import styles from './styles.module.scss';
import Burger from './burger/burger';
import Registerv2Button from '../buttons/register_v2/button';
import LoginButton from '../buttons/login/button';

class Header extends React.Component{
  render(){
    return(
      <div className={styles.container}>
        <Registerv2Button/>
        <LoginButton/>
        <Burger/>
      </div>
    );
  }
}

export default Header;
