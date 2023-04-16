import styles from './5experience.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const experience_main = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience_main" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>PROJECTS</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    There ain’t a lot of projects that i worked on, other than my small tests, but i am sure hope they will grow in numbers.
                </p>
                <p className={utilities.paragraph}>
                    Anyway, you should at least have a look at them.
                </p>

                <div className={styles.flex}>
                    <a href="/#experience" className={styles.button}>Take me to PROJECTS</a>
                </div>
            </div>

        </section>
    )
})

export default experience_main