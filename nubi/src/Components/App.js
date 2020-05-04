import React, { Component } from 'react';
import Blog from './Blog'
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
            <Blog/>
        </div>
      </div>
    );
  }
}

export default App;
