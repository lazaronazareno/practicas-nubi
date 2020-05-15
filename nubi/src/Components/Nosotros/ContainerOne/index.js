import React from 'react';
import styles from './styles.module.scss'
import Logo from '../Assets/img_nosotros_alianza.svg'
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
              <h1 className={styles.subtitle}>Recopilación y uso de datos.</h1>
              <hr className={styles.hr}/>
              <p className={styles.text}>Somos un grupo de personas trabajando todos los dias para renovar la formaen la que ves y manejás tus finanzas. Abrazamos los desafíos por que creemos que aplicando creatividad e innovación podemos lograr un cambio sustancial en la industria financiera tal cual la conocemos.</p>
              <p className={styles.text}>Nubi es un startup que nació para crear oportunidades, para darle la posibilidad a todas las personas a que accedan a distintos productos financieros de manera simple,segura,rapida y transparente.</p>
              <p className={styles.text}>Tenemos un Equipo de experiencia del Cliente especializado para respolver todas las consultas e inquietudes que tengas de manera personal,cercana y efectiva.</p>
              <p className={styles.text}>Te entendemos, la experiencia bancaria tiene que cambiar. Te invitamos a que descubras y seas parte de Nubi.</p>
              <p className={styles.text2}>#ExperienciaNubi</p>
              <p className={styles.text}>Si compartis nuestra misma visión y queres ser parte de nuestro equipo, Mandanos tu CV a sumate@tunubi.com</p>
            </div>
               <div className={styles.title3}>
               <h1 className={styles.subtitle}>Una alianza sin fronteras...</h1>
               <hr className={styles.hr}/>
               <img src={Logo} className={styles.Logo}/>
            </div>
            <div className={styles.title2}>
              <p className={styles.text}>Formamos una alianza estratégica con PayPal, ofreciendo dos productos que facilitan la compraventa de bienes y servicios a muchísimas personas.</p>
              <p className={styles.text}>-Con Retiros, incentivamos a las PYMES,freelencers y emprendedores a que abran sus puertas al resto del mundo, facilitando el cobro de sus ventas y retirando su sueldo PayPAl directamente a una cuenta bancaria local.</p>
              <p className={styles.text}>-Con Recargas, ayudamos a quienes no tienen tarjetas de crédito internacional a que puedan comprar online transfiriendo directamente desde su cuenta bancaria para recargar saldo en PayPal.</p>
            </div>

            

        </div>
      );
    }
  }
  
  export default ContainerOne;