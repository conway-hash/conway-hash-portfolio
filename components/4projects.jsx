import styles from './4projects.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects" className={utilities.section}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>PROJECTS</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    This is a quick preview of all the projects I have worked on <b><i>[so far !]</i></b>. I sure hope they will grow in numbers.
                </p>
                <p className={utilities.paragraph}>
                    Anyway, you should at least take a look at them.
                </p>

                <div className={styles.flex}>
                    <Link href="/#projects_main" aria-label="projects_main" className={styles.button}>Take me to PROJECTS</Link>
                </div>
            </div>

        </section>
    )
})

export default projects
