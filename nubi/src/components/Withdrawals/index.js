import React from 'react';
import styles from './styles.module.scss'
import ContainerOne from './ContainerOne'
import ContainerTwo from './ContainerTwo'

function Whithdrawals() {
    return(
        <div className={styles.Whithdrawals}>
            <ContainerOne/>
            <ContainerTwo/>
        </div>
    )
}

export default Whithdrawals;