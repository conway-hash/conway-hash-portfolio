import styles from './4projects.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects" className={utilities.section}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>PROJECTS</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    A quick preview of all my project that i worked on <b><i>[so far !]</i></b>. I sure hope they will grow in numbers.
                </p>
                <p className={utilities.paragraph}>
                    Anyways, you should at least take a look at them.
                </p>

                <div className={styles.flex}>
                    <a href="/#projects_main" className={styles.button}>Take me to PROJECTS</a>
                </div>
            </div>

        </section>
    )
})

export default projects