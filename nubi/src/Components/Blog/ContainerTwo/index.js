import React from 'react';
import styles from './styles.module.scss';
import submit from '../assets/submit.svg'

class ContainerTwo extends React.Component{
    render(){
        return(
            <div className={styles.cont2}>
                <div className={styles.ContainerBlog}>
                    <div className={styles.title}>
                        <h1 className={styles.title1}>¡Sumate a nuestro Blog!</h1>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.text1}>Enterate de todas las novedades de Nubi suscribiendote a nuestro Blog</p>
                    </div>
                    <div className={styles.buscador}>
                      <form  className={styles.search}>
	                       <input  className={styles.search1}  placeholder ="Dejanos tu mail"/>
                      </form>
                    </div>
                    <div className={styles.buttonSearch}>
                      <button className={styles.buttonOne}>
                          <img src={submit} className={styles.button1}/>  
                      </button>
                    </div>
                    <div className={styles.buttonTwo}>
                        <button class={styles.button2}>
                            <strong>Ver blog</strong>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContainerTwo;