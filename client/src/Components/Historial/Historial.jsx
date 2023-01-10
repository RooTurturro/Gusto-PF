import React from "react";
import burger from '../../assets/burger.png'
import styles from './Historial.module.css'


// aca se obtienen las compras hechas por el usuario
// se muestran en el perfil de cada usuario luego de logearse
// se puede hacer un mapeo y devolver la Card del menu pero siendo ya una compra realizada

const Historial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerIzq}>
        <img src={burger} alt='nada' />
        <div className={styles.info}>
          <p>Nombre del producto</p>
          <div>
            Estado del producto(entregado o en proceso)
          </div>
          <div>
            Fecha de la compra
          </div>
        </div>
      </div>
      <div className={styles.containerDer}>
        <button>Ver compra</button>
        <button>Volver</button>
      </div>
    </div>

  );
};

export default Historial;
