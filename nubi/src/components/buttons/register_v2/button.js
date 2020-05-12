import React from 'react';

import styles from './styles.module.scss';

function Registerv2Button(props) {
  let boton = styles.button;
  if (props.show === true) {
    boton = styles.buttonChange;
  }
  return (
    <button type="button" className={boton}>
      REGISTRATE GRATIS
    </button>
  );
}

export default Registerv2Button;
