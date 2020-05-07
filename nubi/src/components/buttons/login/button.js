import React from 'react';

import styles from './styles.module.scss';

function LoginButton(props) {
  let button = styles.button;
  if (props.show === true) {
    button = styles.buttonChange;
  }
  return (
    <button type="button" className={button}>
      INICIAR SESIÓN
    </button>
  );
}

export default LoginButton;
