import styles from './2landing.module.css'
import utilities from '/styles/utilities.module.css'
import { forwardRef, useEffect, useState } from 'react';
import Link from 'next/link'

const landing = forwardRef((props, ref) => {

    const names = ['Tomáš', 'Thomas', 'Conway-Hash']
    const [name, setName] = useState(names[0]);


    const [loadingName, setLoadingName] = useState('');
    const [isWriting, setIsWriting] = useState(true);

    const [charIndex, setCharIndex] = useState(0);
    const [charTime, setCharTime] = useState(300);

    useEffect(() => {
        const timeout_write = setTimeout(() => {
            if (charIndex < name.length && isWriting) {
                setLoadingName(prevLoadingName => prevLoadingName + name[charIndex]);
                setCharIndex(prevCharIndex => prevCharIndex + 1);
                if (charIndex + 1 >= name.length) {
                    setCharTime(2000)
                }
            } else if (0 < charIndex) {
                if (isWriting) {
                    setIsWriting(false)
                    setCharTime(100)
                }
                setLoadingName(prevLoadingName => prevLoadingName.substring(0, charIndex - 1));
                setCharIndex(prevCharIndex => prevCharIndex - 1);
                if (charIndex - 1 == 0) {
                    setName(prevName => {
                        const nameIndex = names.indexOf(prevName)
                        return names[(nameIndex + 1) % names.length]
                    })
                    setCharTime(300)
                    setIsWriting(true)
                }
            }
        }, charTime);

        return () => {
            clearTimeout(timeout_write);
        };
    }, [charIndex, isWriting]);

    return (
        <section ref={ref} id="home" className={utilities.section}>
            <div className={`${utilities.paragraph_container} ${utilities.landing_show}`}>
                <p className={`${styles.paragraph}`}>
                    Hello, my name is
                </p>
                <p className={`${styles.paragraph} ${styles.paragraph_main}`}>
                    ${loadingName}
                </p>
                <p className={styles.paragraph}>
                    Welcome to my website!
                </p>
                <Link href="/#schedule" aria-label="schedule" className={`${styles.button} ${styles.landing_button}`} >Take me to SCHEDULE</Link>
            </div>
        </section>
    )
})

export default landing;