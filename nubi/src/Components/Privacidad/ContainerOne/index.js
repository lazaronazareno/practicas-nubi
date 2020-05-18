import React from 'react';

import Logo from '../Assets/Isologo.jpg';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class ContainerOne extends React.Component {
  render() {
    return (
      <div className={styles.cont1}>
        <div className={styles.containerPrivacidad}>
          <div className={styles.Fondo}>
            <h1 className={styles.title1}>Política de privacidad Nubi</h1>
          </div>
        </div>
        <div className={styles.subtitle1}>
          <h1 className={styles.subtitleOne}>
            Nubi respeta tu privacidad y por eso te contamos que hacemos con la información que compartís con
            nosotros ahora.
          </h1>
        </div>
        <div className={styles.title2}>
          <h1 className={styles.subtitle}>Recopilación y uso de datos.</h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            Cuando ingreses a nuestra web <strong>www.tunubi.com</strong> y nos dejes tus datos, los mismos
            serán objeto de tratamiento automatizado e incorporada a la base de Nubi
          </p>
          <p className={styles.text}>
            La información que nos compartas las vamos a utilizar excluisvamente para mejorar tu experiencia
            con Nubi así como para informarte de productos y servicios que te puedan interesar.Con la
            informacion que tengamos vamos a:
          </p>
          <p className={styles.text}>
            A) Desarrollar estudios internos sobre tus intereses, comportamientos y demografía para comprender
            mejor tus necesidades e intereses y ofrecer mejores producto y/o servicios y mejorar la
            experiencia de usuario en la web. Generar perfiles.
          </p>
          <p className={styles.text}>
            B) Comunicarnos con vos para contarte novedades de Nubi, de nuevos productos que tengamos y otro
            tipo de informacion publicitaria de Nubi o de alguno de sus socios comerciales.
          </p>
          <p className={styles.text}>
            C) Realizar acciones de marketing directo via email, telefónica o postal.
          </p>
          <p className={styles.text}>
            D) Remitir parte de la información a nuestros proveedores de servicios o las empresas de
            "outsourcing" relacionadas con las operaciones que realices a través de nuestro sitio,como,sin
            limitarse a, servicios de transporte, medios de pago,seguros o intermediarios en gestión de pagos,
            call centers o programas de fidelidad, entre otros. Nubi velará porque se cumplan ciertos
            estándares, mediante la firma de acuerdos o convenios cuyo objeto sea la privacidad de tus datos
            personales.
          </p>
        </div>
        <div className={styles.title2}>
          <h1 className={styles.subtitle}>Autorización </h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            Tené especialmente en cuenta que ingresando tu información personal en la web de Nubi, estarás
            autorizandonos a:
          </p>
          <p className={styles.text}>
            A) Enviarte a tu e-mail información publicitaria de Nubi, o sus socios comerciales, relacionada a
            productos o noticias que pueden interesarte{' '}
          </p>
          <p className={styles.text}>
            B) Compartir tus datos con nuestras empresas vinculadas y/o nuestros socios comerciales, todo ello
            segùn lo previsto en la ley de Protección de Datos Personales.
          </p>
          <p className={styles.text}>
            Recordá que en cualquier momento vos podrás solicitar el retiro o bloqueo de tu e-mail para dejar
            de recibir información publicitaria por ese medio.
          </p>
        </div>
        <div className={styles.title3}>
          <h1 className={styles.subtitle}>Cookies. </h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            Cuando ingresasa Nubi podemos guardar alguna información en tu computadora o dispositivo bajo la
            forma de una "Cookie" o archivo similar que puede sernos útil para mejorar la experiencia de
            usuario en nuestra web y conocer tus intereses y preferencias analizando las paginas que hayas
            visitado y/o las búsquedas que realizaste, y asi mejorar nuestras iniciativas comerciales y
            promocionales, mostrar publicidad o promociones,banners de interés, noticias sobre Nubi,
            perfeccionar los Servicios,etc. Podes borrar las Cookies de tu dispositivo cuando quieras
            utilizando la opción correspondiente a tu navegador y eso no afectará el uso de nuestro sitio.
          </p>
        </div>
        <div className={styles.title4}>
          <h1 className={styles.subtitle}>Confidencialidad de la información</h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            Nubi no venderá, alquilará o compartirá tu información excepto en las formas establecidas en estas
            políticas.
          </p>
          <p className={styles.text}>
            Sin perjuicio de ello deberemos entregar todo o parte de tu información si un juez o autoridad
            completamente de acuerdo a las disposiciones legales vigentes así lo requiera, no siendo Nubi
            responsable por la información que sea revelada.
          </p>
        </div>
        <div className={styles.title5}>
          <h1 className={styles.subtitle}>
            Derechos de acceso, cancelación y rectificación de la información personal.
          </h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos
            en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés
            legitímo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley n° 25.326
          </p>
          <p className={styles.text}>
            La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de Control de la Ley N° 25.326,
            tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al
            incumplimiento de las normas sobre protección de datos personales.
          </p>
          <p className={styles.text}>
            Ante cualquier duda o retificación que desees realizar, podes enviarnos un mail a info@tunubi.com
          </p>
        </div>
        <div className={styles.title6}>
          <h1 className={styles.subtitle}>Cambios en la política de privacidad</h1>
          <hr className={styles.hr} />
          <p className={styles.text}>
            Es posible que cambiemos estas politicas de tiempo en tiempo, por eso te pedimos que,
            independietemente de lo que te podamos informar, accedes a esta política regularmente.
          </p>
        </div>
        <div className={styles.logo}>
          <img src={Logo} className={styles.imagen} alt="logo" />
        </div>
      </div>
    );
  }
}

export default ContainerOne;
