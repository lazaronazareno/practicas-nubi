import React from 'react';
import styles from './styles.module.scss';
import Fondo from '../assets/Retiros.png';


class ContainerOne extends React.Component{
    render(){
        return (
            <div className={styles.cont1}>
              <div className={styles.ContainerWithdrawals}>
                  <img src={Fondo}className={styles.fondo}/>
              </div>
            </div>
            
        )
    }
}

export default ContainerOne;