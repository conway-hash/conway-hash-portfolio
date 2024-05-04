import styles from './3about.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const about = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className={utilities.section}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`} >ABOUT</h1>
            <div className={`${utilities.paragraph_container} ${props.prop ? utilities.paragraph_show : utilities.paragraph_hide}`}>
                <p className={utilities.paragraph}>
                    I'm a developer of Slovak nationality, currently studying programming and app development at masaryk university faculty of informatics (MUNI FI) in Brno.
                </p>
                <p className={utilities.paragraph}>
                    I enjoy working on problem solving, alone or in teams, reading documentations. And I love trying out new technologies, frameworks, and programming languages.
                </p>
                <p className={utilities.paragraph}>
                    Besides programming, I edit photos and videos. Sometimes I hike and camp, and I also play games.
                </p>
            </div>
        </section>
    )
})

export default about
