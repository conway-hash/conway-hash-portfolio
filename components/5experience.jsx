import styles from './5experience.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const experience = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience" className={utilities.section}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>EXPERIENCE</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    All frameworks, libraries, programming languages, i studied, read the docs, or i'm currently using to develop projects.
                </p>
                <p className={utilities.paragraph}>
                    Curious? Click the button below.
                </p>
                <div className={styles.flex}>
                    <a href='/#experience_main' className={styles.button}>Take me to EXPERIENCES</a>
                </div>
            </div>
        </section>
    )
})

export default experience