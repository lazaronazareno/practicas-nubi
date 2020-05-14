import React, { Component } from 'react';
import styles from './styles.module.scss';
import Privacidad from './Privacidad'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Privacidad/>
        </div>
      </div>
    );
  }
}

export default App;
