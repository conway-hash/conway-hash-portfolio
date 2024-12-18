import styles from './2landing.module.css'
import utilities from '/styles/utilities.module.css'
import Link from 'next/link'
import React, { forwardRef } from 'react';

const schedule = forwardRef((props, ref) => {

    return (
        <section ref={ref} id="schedule" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>SCHEDULE</h1>
            <div className={`${styles.flex} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <Link href="/#home" aria-label="home" className={styles.button}>Back to home</Link>
            </div>
            <div className={`${styles.grid} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>

                <a className={styles.grid_el} href='https://github.com/tonil00/slovak-feed-sentinel'>
                    <div className={`${styles.status} ${styles.ongoing}`} >Ongoing</div>
                    <div className={styles.status_content} >
                        <h3>Sentimetria</h3>
                        <p className={styles.description} >
                            A web platform that captures and visualizes sentiment data across regions based on news analysis.
                            Explore how events influence regional emotions through clear, data-driven insights.
                        </p>
                    </div>
                </a>

                <div className={styles.grid_el}>
                    <div className={`${styles.status} ${styles.ongoing}`} >Ongoing</div>
                    <div className={styles.status_content} >
                        <h3>SLSP AI Projects</h3>
                        <p className={styles.description} >
                            Developing AI-powered chatbots for various departments across the bank, automating tasks, and enhancing internal processes.
                        </p>
                    </div>
                </div>

                <div className={styles.grid_el}>
                    <div className={`${styles.status} ${styles.ongoing}`} >Ongoing</div>
                    <div className={styles.status_content} >
                        <h3>University Finals</h3>
                    </div>
                </div>

                <div className={styles.grid_el}>
                    <div className={`${styles.status} ${styles.finished}`} >Finished</div>
                    <div className={styles.status_content} >
                        <h3>University Semester</h3>
                    </div>
                </div>

                <a className={styles.grid_el} href='https://github.com/conway-hash/expenses-notebook-notex'>
                    <div className={`${styles.status} ${styles.delayed}`} >Delayed</div>
                    <div className={styles.status_content} >
                        <h3>Notex</h3>
                        <p className={styles.description} >
                            A simple and intuitive expense tracking app designed to help users manage their finances effectively by logging and categorizing daily expenses.
                        </p>
                    </div>
                </a>

                <a className={styles.grid_el} href='https://github.com/conway-hash/habito'>
                    <div className={`${styles.status} ${styles.suspended}`} >Suspended</div>
                    <div className={styles.status_content} >
                        <h3>Habitō</h3>
                        <p className={styles.description} >
                            A habit-tracking app designed to help users build and maintain positive routines.
                            Track progress, set goals, and stay motivated to develop healthier habits.
                        </p>
                    </div>
                </a>

                <div className={styles.grid_el}>
                    <div className={`${styles.status} ${styles.planned}`} >Planned</div>
                    <div className={styles.status_content} >
                        <h3>Nothing at this time :D</h3>
                    </div>
                </div>

            </div>
        </section>
    )
})

export default schedule
