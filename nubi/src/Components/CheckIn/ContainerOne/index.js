import React from 'react';
import styles from './styles.module.scss'


class ContainerOne extends React.Component{
    render(){
        return (
            <div className={styles.cont1}>
                    <div className={styles.titleOne}>
                        <h1 className={styles.title1}>Tu cuenta Nubi en sólo 2 minutos</h1>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.button1}>
                            Registrate Greatis
                        </button>
                    </div>
            </div>
        )
    }

}
export default ContainerOne;