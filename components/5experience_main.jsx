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
                <a className={styles.grid_el} href='https://en.m.wikipedia.org/wiki/HTML'>
                    <div className={styles.grid_el_overlay}><h1>HTML</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/CSS'>
                    <div className={styles.grid_el_overlay}><h1>CSS</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/JavaScript'>
                    <div className={styles.grid_el_overlay}><h1>JS</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/PHP'>
                    <div className={styles.grid_el_overlay}><h1>PHP</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/121px-PHP-logo.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/MySQL'>
                    <div className={styles.grid_el_overlay}><h1>MySQL</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/React_(software)'>
                    <div className={styles.grid_el_overlay}><h1>React</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Next.js'>
                    <div className={styles.grid_el_overlay}><h1>Next.js</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/120px-Nextjs-logo.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Node.js'>
                    <div className={styles.grid_el_overlay}><h1>Node.js</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Express.js'>
                    <div className={styles.grid_el_overlay}><h1>Express</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/120px-Expressjs.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Python_(programming_language)'>
                    <div className={styles.grid_el_overlay}><h1>Python</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/C%2B%2B'>
                    <div className={styles.grid_el_overlay}><h1>C++</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png' />
                </a>
            </div>
        </section>
    )
})

export default experience_main