import React, { Component } from 'react';
import styles from './styles.module.scss';
import Nosotros from './Nosotros'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Nosotros/>
        </div>
      </div>
    );
  }
}

export default App;
