import styles from './5experience.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const experience = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience" className={utilities.section}>
            <h1 className={styles.header}>EXPERIENCE</h1>
            <p className={utilities.paragraph}>
                There ain’t a lot of projects that i worked on, other than my small tests, but i sure hope they will grow in numbers.
            </p>
            <p className={utilities.paragraph}>
                Anyway, you should at least have a look at them.
            </p>
            <div className={styles.flex}>
                <button className={styles.button}>Take me to EXPERIENCES</button>
            </div>
        </section>
    )
})

export default experience