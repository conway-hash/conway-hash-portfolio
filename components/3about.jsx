import styles from './3about.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const about = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className={utilities.section}>
            <h1 className={styles.header} >ABOUT</h1>
            <p className={utilities.paragraph}>
                I’m a self taught developer of Slovak nationality.
            </p>
            <p className={utilities.paragraph}>
                I am currently studying programming and app development at MUNI FI Brno.
            </p>
            <p className={utilities.paragraph}>
                I enjoy working in teams where people have different points of views and solutions regarding problems.
            </p>
            <p className={utilities.paragraph}>
                Besides programming, i fancy playing computer games, drinking teas and dreaming big.
            </p>
        </section>
    )
})

export default about