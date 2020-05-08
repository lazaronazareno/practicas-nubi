import React, { Component } from 'react';

import Blog from './Components/Blog';
import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
