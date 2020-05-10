import React from 'react';

import styles from './styles.module.scss';

function LoginButton(props) {
  let boton = styles.button;
  if (props.show === true) {
    boton = styles.buttonChange;
  }
  return (
    <button type="button" className={boton}>
      INICIAR SESIÓN
    </button>
  );
}

export default LoginButton;
