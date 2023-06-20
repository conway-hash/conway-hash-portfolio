import styles from './5experience.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const experience_main = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience_main" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>EXPERIENCE</h1>
            <div className={`${styles.flex} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <a href="/#experience" className={styles.button}>Back to home</a>
            </div>
            <div className={`${styles.grid} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
                <a className={styles.grid_el} href=''>
                    <div className={styles.grid_el_overlay}></div>
                </a>
            </div>
        </section>
    )
})

export default experience_main