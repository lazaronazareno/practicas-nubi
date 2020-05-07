import React from 'react';

import Registerv2Button from '../buttons/register_v2/button';
import LoginButton from '../buttons/login/button';

import Burger from './burger/burger';
import Sidebar from './menu/menu';
import styles from './styles.module.scss';

class Header extends React.Component {
  state = {
    sidebarOpen: false,
  };

  sidebarClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <Registerv2Button show={this.state.sidebarOpen} />
          <LoginButton show={this.state.sidebarOpen} />
          <Burger show={this.state.sidebarOpen} click={this.sidebarClickHandler} />
        </div>
        <Sidebar show={this.state.sidebarOpen} />
      </div>
    );
  }
}

export default Header;
