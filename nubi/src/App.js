import React, { Component } from 'react';

import Benefits from './components/Benefits';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Benefits />
        </div>
      </div>
    );
  }
}

export default App;
