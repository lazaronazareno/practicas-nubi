import React from 'react';
import styles from './styles.module.scss';
import Fondo from '../assets/Fondo.png'

class ContainerOne extends React.Component{
    render(){
        return (
            <div className={styles.cont1}>
                <div className={styles.ContainerBlog}>
                   <img src={Fondo} className={styles.Fondo}/>
                </div>
            </div>
        )
    }
}
export default ContainerOne;