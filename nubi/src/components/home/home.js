import React from 'react';
import styles from './styles.module.scss';
import nubi from '../../assets/images/nubi-paypal-logo.svg';
import phone from '../../assets/images/img_main_section_phone@2x.png'
import RegisterButton from '../buttons/register/button';
import HomeTwo from './homeTwo';
import HomeThree from './homeThree';

class Home extends React.Component {
  render(){
  return(
    <div className={styles.container}>
      <div className={styles.secondContainer}>
      <div className={styles.content}>
      <img src={nubi} className={styles.logo} alt="nubi" />
      <h1 className={styles.text}>Cobrá con Paypal y retirá a tu banco</h1>
      <RegisterButton/>
      </div>
      <img src={phone} className={styles.phone} alt="phone"/>
      </div>
      <div className={styles.thirdContainer}>
      <HomeTwo/>
      <HomeThree/>
      </div>
    </div>
  );
}
}


export default Home;
