import React from 'react';

import styles from './styles.module.scss';

function LoginButton(props) {
  let boton = styles.button;
  let enlace = styles.link;
  if (props.show === true) {
    boton = styles.buttonChange;
    enlace = styles.linkChange;
  }
  return (
    <button type="button" className={boton}>
      <a className={enlace} href="https://login.tunubi.com/Login">
        INICIAR SESIÓN
      </a>
    </button>
  );
}

export default LoginButton;
