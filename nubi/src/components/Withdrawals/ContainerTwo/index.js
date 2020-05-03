import React from 'react';
import styles from './styles.module.scss';

class Containertwo extends React.Component{
    render(){
        return (
            <div className={styles.cont2}>
              <div className={styles.ContainerBenefits}>
                  <div className={styles.button}>
                     <button className={styles.boton}> Registrate Gratis</button>
                   </div>

                   <div className={styles.title1}>
                     <h1 className={styles.titleOne}>Retirá de tu cuenta PayPal</h1>
                   </div>
                   <div className={styles.title2}>
                       <h3>Vendé en todo el mundo con PayPal y retirá tu plata con Nubi en 3 días hábiles a cualquier banco en Argentina</h3>
                   </div>
                   <div className={styles.title3}>
                       <h3> Podés elegir como destino una cuenta bancaria en pesos o en dólares. Te mostramos las tarifas en el siguiente cuadro:</h3>
                   </div>
                   <div className={styles.table}>
                       <table className={styles.table1}>
                           <th className={styles.th1}>
                              Monto del retiro 
                           </th>
                           <th className={styles.th2}>
                               A tu cuenta en pesos
                           </th>
                           <th className={styles.th3}>
                               Retiros en U$S
                           </th>
                           <tr className={styles.tr1}>
                               <td className={styles.td1}>U$S 20-1,99</td>
                               <td className={styles.td2}>U$S 10</td>
                               <td className={styles.td3}>U$S 15+1%</td>
                           </tr>
                           <tr className={styles.tr2}>
                               <td className={styles.td4}>U$S 2000-10.000</td>
                               <td className={styles.td5}>0,5%</td>
                               <td className={styles.td6}>2,5%</td>
                           </tr>
                       </table>
                   </div>
                   <div className={styles.text1}>
                       <p>Recordá que las tarifas mencionadas hay que adicionarle el IVA(21%) correspondiente.El monto mínimo para retirar es U$S 20 y el maximo U$S 10.000 por operación. </p>
                   </div>
                   <div className={styles.text2}>
                       <p>El plazo de 3 dias hábiles no es aplicable para tu primer retiro superior a 2000 dólares. En ese caso,Nubi deberá validar tus fondos y en esa primera operación,tu retiro demorarà 5 días hábiles.</p>
                   </div>




              </div>
            </div>
            
        )
    }
}

export default Containertwo;