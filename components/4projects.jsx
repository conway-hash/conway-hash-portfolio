import styles from './4projects.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';
import Link from 'next/link';

const projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects" className={utilities.section}>
            <h1 className={styles.header}>PROJECTS</h1>
            <p className={utilities.paragraph}>
                There ain’t a lot of projects that i worked on, other than my small tests, but i am sure hope they will grow in numbers.
            </p>
            <p className={utilities.paragraph}>
                Anyway, you should at least have a look at them.
            </p>
            <div className={styles.flex}>
                <Link href="/projects" className={styles.button}>Take me to PROJECTS</Link>
            </div>
        </section>
    )
})

export default projects