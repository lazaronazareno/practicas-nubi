import React from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Burger extends React.Component {
  render(props) {
    let barchange1 = styles.bar1;
    let barchange2 = styles.bar2;
    let barchange3 = styles.bar3;
    if (this.props.show === true) {
      barchange1 = styles.changed1;
      barchange2 = styles.changed2;
      barchange3 = styles.changed3;
    }
    return (
      <button type="button" className={styles.burger} onClick={this.props.click}>
        <div className={barchange1} />
        <div className={barchange2} />
        <div className={barchange3} />
      </button>
    );
  }
}

export default Burger;
