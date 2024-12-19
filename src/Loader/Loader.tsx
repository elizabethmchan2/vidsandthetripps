import React from 'react'
import styles from './Loading.module.scss';
import { Platter } from '../assets/Platter';
import { Tonearm } from '../assets/Tonearm';
import { Vinyl } from '../assets/Vinyl';
import VinylContrast from '../assets/VinylContrast';

const Loader = () => {
  return (
    <div className={styles.loading}>
        <div className={styles.wrapper}>
            <Vinyl className={styles.vinyl}/>
            <Platter className={styles.platter}/>
            <VinylContrast className={styles.vinylContrast} />
            <Tonearm className={styles.tonearm}/>
        </div>
    </div>
  )
}

export default Loader;