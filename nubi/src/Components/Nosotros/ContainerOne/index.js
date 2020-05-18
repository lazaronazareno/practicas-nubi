import React from 'react';

import Logo from '../Assets/img_nosotros_alianza.svg';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.containerPrivacidad}>
          <div className={styles.Fondo}>
            <h1 className={styles.title1}>Nosotros.</h1>
          </div>
        </div>
        <div className={styles.title2}>
          <h1 className={styles.subtitle}>¿Qué nos hace diferentes?</h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            <strong>
              Somos un grupo de personas trabajando todos los dias para renovar la forma en la que ves y
              manejás tus finanzas.
            </strong>{' '}
            Abrazamos los desafíos por que creemos que aplicando creatividad e innovación podemos lograr un
            cambio sustancial en la industria financiera tal cual la conocemos.
          </p>
          <p className={styles.text}>
            Nubi es un startup que nació para <strong>crear oportunidades,</strong> para darle la posibilidad
            a todas las personas a que accedan a distintos productos financieros de manera{' '}
            <strong>simple, segura, rapida y transparente.</strong>
          </p>
          <p className={styles.text}>
            Tenemos un <strong>Equipo de Experiencia del Cliente</strong> especializado para resolver todas
            las consultas e inquietudes que tengas de manera <strong>personal, cercana y efectiva.</strong>
          </p>
          <p className={styles.text}>
            Te entendemos, la experiencia bancaria tiene que cambiar. Te invitamos a que descubras y seas
            parte de Nubi.
          </p>
          <p className={styles.text2}>#ExperienciaNubi</p>
          <p className={styles.text}>
            Si compartís nuestra misma visión y queres ser parte de nuestro equipo, Mandanos tu CV a
            <strong> sumate@tunubi.com</strong>
          </p>
        </div>
        <div className={styles.title3}>
          <h1 className={styles.subtitle}>Una alianza sin fronteras...</h1>
          <hr className={styles.hr} />
          <img src={Logo} className={styles.Logo} alt="logo" />
        </div>
        <div className={styles.title2}>
          <p className={styles.text}>
            <strong>
              Formamos una alianza estratégica con PayPal, ofreciendo dos productos que facilitan la
              compraventa de bienes y servicios a muchísimas personas.
            </strong>
          </p>
          <p className={styles.text}>
            <strong>-Con Retiros,</strong> incentivamos a las PYMES,freelencers y emprendedores a que abran
            sus puertas al resto del mundo, facilitando el cobro de sus ventas y retirando su sueldo PayPal
            directamente a una cuenta bancaria local.
          </p>
          <p className={styles.text}>
            <strong>-Con Recargas,</strong> ayudamos a quienes no tienen tarjetas de crédito internacional a
            que puedan comprar online transfiriendo directamente desde su cuenta bancaria para recargar saldo
            en PayPal.
          </p>
        </div>
      </div>
    );
  }
}

export default ContainerOne;
