import React from 'react';
import styles from './styles.module.scss';


class ContainerOne extends React.Component{
    render() {
        return(
            <div className={styles.cont1}>
                <div className={styles.containerBenefits}>
                    <div className={styles.contOne}>
                     <h1 className={styles.title1}>Ràpido.</h1>
                     <hr className={styles.hr1}></hr>
                     <p>Realizà tu recagara o retiro de tu cuenta PayPal con solo unos clicks.</p>
                    </div>
                
                   <div className={styles.contTwo}>
                       <h1 className={styles.title2}>Simple.</h1>
                       <hr className={styles.hr2}></hr>
                       <p>Olvidate de los papeleos inagotables.Con Nubi hacè todo en 4 simples pasos desde donde quieras.</p>
                   </div>
                   <div className={styles.contThree}>
                       <h1 className={styles.title3}>Seguro.</h1>
                       <hr className={styles.hr3}></hr>
                       <p>Contamos con monitoreo de fraudes 24/7 y cubrimos 100% de las transacciones no autorizadas verificadas.</p>
                   </div>
                   <div className={styles.contFour}>
                       <h1 className={styles.title4}>Transparente.</h1>
                       <hr className={styles.hr4}></hr>
                       <p>Conoce dònde esta tu dinero en todo momento. Sin comisiones ocultas.</p>
                   </div>
                   <div className={styles.botton}>
                       <button className={styles.botton1}>Registrate Gratis</button>
                   </div>
                
                
                </div>            
            </div>
        )
    }
}

export default ContainerOne;