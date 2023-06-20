import styles from './3about.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const about = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className={utilities.section}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`} >ABOUT</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    I’m a self taught developer of Slovak nationality.
                </p>
                <p className={utilities.paragraph}>
                    I am currently studying programming and app development at MUNI FI Brno.
                </p>
                <p className={utilities.paragraph}>
                    I enjoy working on problem solving, alone or in teams.
                </p>
                <p className={utilities.paragraph}>
                    Besides programming, i fancy reading documentations, love drinking tea and trying to dream big.
                </p>
            </div>
        </section>
    )
})

export default about