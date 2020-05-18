import React from 'react';

import styles from './styles.module.scss';
import Privacidad from './Components/Privacidad';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <Privacidad />
        </div>
      </div>
    );
  }
}

export default App;
