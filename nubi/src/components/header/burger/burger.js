import React from 'react';

import styles from './styles.module.scss';

class Burger extends React.Component {
  render(props) {
    return (
      <button type="button" className={styles.burger} onClick={this.props.click}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </button>
    );
  }
}

export default Burger;
