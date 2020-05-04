import React, { Component } from 'react';
import CheckIn from './CheckIn'
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <CheckIn/>
        </div>
      </div>
    );
  }
}

export default App;
