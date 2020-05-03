import React, { Component } from 'react';
import Whithdrawals from './Withdrawals';
import styles from './styles.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader} >
            
            <Whithdrawals/>

        </div>
      </div>
    );
  }
}

export default App;
