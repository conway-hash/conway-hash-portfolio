import styles from './4projects.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const projects_main = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects_main" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>MY PROJECTS</h1>
            <div className={styles.flex}>
                <a href="/#projects" className={styles.button}>Back to home</a>
            </div>
            <div className={styles.grid}>
                <a className={styles.grid_el} href='http://elimo.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.png' />
                </a>
                <a className={styles.grid_el} href='http://elimo.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.png' />
                </a>
                <a className={styles.grid_el} href='http://elimo.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.png' />
                </a>
                <a className={styles.grid_el} href='http://elimo.sk/'>
                    <div className={styles.grid_el_overlay}></div>
                    <h2>Elimo.sk</h2>
                    <img src='media/projects/elimo.png' />
                </a>
            </div>
        </section>
    )
})

export default projects_main