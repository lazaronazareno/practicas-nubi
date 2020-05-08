import React, { Component } from 'react';

import Whithdrawals from './components/Withdrawals';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Whithdrawals />
        </div>
      </div>
    );
  }
}

export default App;
