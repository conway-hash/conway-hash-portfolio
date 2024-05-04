import styles from './4projects.module.css'
import utilities from '/styles/utilities.module.css'
import Link from 'next/link'
import React, { forwardRef } from 'react';

const projects_main = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects_main" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>MY PROJECTS</h1>
            <div className={`${styles.flex} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <Link href="/#projects" aria-label="projects" className={styles.button}>Back to home</Link>
            </div>
            <div className={`${styles.grid} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <a className={styles.grid_el} href='https://habito-one.vercel.app/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>HabitōTestV0 (Dskt/Mob)</h2>
                    <img src='media/projects/habito0.png' />
                </a>
                <a className={styles.grid_el} href='https://habito-app.vercel.app/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>HabitōTestV1 (Mob)</h2>
                    <img src='media/projects/habito1.png' />
                </a>
                <a className={styles.grid_el} href='https://zdraver.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Zdraver.sk</h2>
                    <img src='media/projects/zdraver.png' />
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.PNG' />
                </a>
                {/*
                <a className={styles.grid_el} href='http://elimo.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.PNG' />
                </a>
                */}
            </div>
        </section>
    )
})

export default projects_main
