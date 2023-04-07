import styles from './2landing.module.css'
import utilities from '/styles/utilities.module.css'
import React, { forwardRef } from 'react';

const landing = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="home" className={utilities.section}>
            <p className={styles.paragraph}>Hello, my name is Tomáš,<br></br>or Thomas,<br></br>or conway-hash,<br></br><br></br>either way,<br></br>Welcome to my page!</p>
        </section>
    )
})

export default landing