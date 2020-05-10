import React, { Component } from 'react';
import Footer from './Footer'
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
