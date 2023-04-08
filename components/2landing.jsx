import styles from './2landing.module.css'
import utilities from '/styles/utilities.module.css'
import { forwardRef, useEffect, useState, useRef } from 'react';

const landing = forwardRef((props, ref) => {

    const names = ['Tomáš', 'Thomas', 'Conway-Hash']
    const [name, setName] = useState(names[0]);


    const [loadingName, setLoadingName] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const interval_ID0 = setInterval(() => {
            console.log(charIndex)
            if (charIndex < name.length) {
                setLoadingName(prevLoadingName => prevLoadingName + name[charIndex]);
                setCharIndex(prevCharIndex => prevCharIndex + 1);
            } else {
                clearInterval(interval_ID0);
            }
        }, 200);

        return () => {
            clearInterval(interval_ID0);
        };
    }, [name, charIndex]);


    return (
        <section ref={ref} id="home" className={utilities.section}>
            <p className={`${styles.paragraph} ${styles.paragraph_main}`}>
                Hello, my name is {loadingName}
            </p>
            <p className={styles.paragraph}>
                Welcome to my website!
            </p>
        </section>
    )
})

export default landing;
    /*
const [showName, setShowName] = useState(false);

const loadingNameRef = useRef('');

 
// useEffect to add letters to loadingName
useEffect(() => {
    const interval_ID0 = setInterval(() => {
        console.log(0)
        if (charIndex < name.length) {
            setLoadingName(prevLoadingName => prevLoadingName + name[charIndex]);
            loadingNameRef.current = loadingName + name[charIndex];
            setCharIndex(prevCharIndex => prevCharIndex + 1);
        } else {
            setShowName(true);
            clearInterval(interval_ID0);
        }
    }, 200);

    return () => {
        clearInterval(interval_ID0);
    };
}, [name, charIndex]);

// useEffect to remove letters from loadingName
useEffect(() => {
    if (!showName) {
        return;
    }

    const timeout_ID = setTimeout(() => {
        const interval_ID1 = setInterval(() => {
            console.log(1)
            setLoadingName(prevLoadingName => {
                const newLoadingName = loadingNameRef.current.slice(0, -1);
                loadingNameRef.current = newLoadingName;
                return newLoadingName;
            });
            if (loadingNameRef.current.length === 0) {
                clearInterval(interval_ID1);
                setShowName(false);
            }
        }, 200);
    }, 2000);

    return () => {
        clearTimeout(timeout_ID);
    };
}, [showName]);

*/

/*
    useEffect(() => {
        const timeout_ID1 = setTimeout(() => {
            const interval_ID1 = setInterval(() => {
                console.log(charIndex)
                if (-1 < charIndex) {
                    setLoadingName(prevLoadingName => prevLoadingName.substring(0, charIndex));
                    setCharIndex(prevCharIndex => prevCharIndex - 1);
                } else {
                    clearInterval(interval_ID1);
                }
            }, 200);
        }, 800)
 
        return () => {
            clearTimeout(timeout_ID1);
        };
    }, [name, charIndex]);
*/