import React, { Component } from 'react';
import Benefits from './Benefits'
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
           <Benefits/>
        </div>
      </div>
    );
  }
}

export default App;
