import React from 'react';

import styles from './styles.module.scss';

function Registerv2Button(props) {
  let button = styles.button;
  if (props.show === true) {
    button = styles.buttonChange;
  }
  return (
    <button type="button" className={button}>
      REGISTRATE GRATIS
    </button>
  );
}

export default Registerv2Button;
