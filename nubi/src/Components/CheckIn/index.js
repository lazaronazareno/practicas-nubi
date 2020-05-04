import React from 'react';
import styles from './styles.module.scss';
import ContainerOne from './ContainerOne'


function CheckIn (){
    return(
        <div className={styles.CheckIn}>
          <ContainerOne/>  
        </div>
    )
}

export default CheckIn;