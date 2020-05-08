import React, { Component } from 'react';

import CheckIn from './Components/CheckIn/index';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <CheckIn />
        </div>
      </div>
    );
  }
}

export default App;
