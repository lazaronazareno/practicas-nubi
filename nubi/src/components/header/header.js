import React from 'react';
import styles from './styles.module.scss';
import Sidebar from './menu/menu';

class Header extends React.Component{
  render(){
    return(
      <div className={styles.container}>
        <Sidebar/>
      </div>
    );
  }
}

export default Header;
