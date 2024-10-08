import styles from './5experience.module.css'
import utilities from '/styles/utilities.module.css'
import Link from 'next/link'
import React, { forwardRef } from 'react';

const experience_main = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="experience_main" className={`${utilities.section} ${styles.container}`}>
            <h1 className={`${styles.header} ${props.prop ? utilities.header_show : utilities.header_hide}`}>EXPERIENCE</h1>
            <div className={`${styles.flex} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <Link href="/#experience" aria-label="experience" className={styles.button}>Back to home</Link>
            </div>
            <div className={`${styles.grid} ${utilities.casual_container} ${props.prop ? utilities.casual_show : utilities.casual_hide}`}>
                <a className={styles.grid_el} href='https://en.m.wikipedia.org/wiki/HTML'>
                    <div className={styles.grid_el_overlay}><h1>HTML</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png' alt='HTML' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/CSS'>
                    <div className={styles.grid_el_overlay}><h1>CSS</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png' alt='CSS' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/JavaScript'>
                    <div className={styles.grid_el_overlay}><h1>JS</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg' alt='JS' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/PHP'>
                    <div className={styles.grid_el_overlay}><h1>PHP</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/121px-PHP-logo.svg.png' alt='PHP' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/MySQL'>
                    <div className={styles.grid_el_overlay}><h1>MySQL</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png' alt='MySQL' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/React_(software)'>
                    <div className={styles.grid_el_overlay}><h1>React</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png' alt='React' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Next.js'>
                    <div className={styles.grid_el_overlay}><h1>Next.js</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/120px-Nextjs-logo.svg.png' alt='Next.js' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Node.js'>
                    <div className={styles.grid_el_overlay}><h1>Node.js</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png' alt='Node.js' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Express.js'>
                    <div className={styles.grid_el_overlay}><h1>Express</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/120px-Expressjs.png' alt='Express' />
                </a>
                
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Python_(programming_language)'>
                    <div className={styles.grid_el_overlay}><h1>Python</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png' alt='Python' />
                </a>
                <a className={styles.grid_el} href='https://streamlit.io/'>
                    <div className={styles.grid_el_overlay}><h1>Streamlit</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/77/Streamlit-logo-primary-colormark-darktext.png' />
                </a>
                <a className={styles.grid_el} href='https://www.langchain.com/'>
                    <div className={styles.grid_el_overlay}><h1>LangChain</h1></div>
                    <img src='https://media.licdn.com/dms/image/D4D12AQGQQFHNeQJRgQ/article-cover_image-shrink_720_1280/0/1711873462713?e=2147483647&v=beta&t=u5ls9p4LHatE_PxtiNIm23lIFGMaAjp-XHdV7TwwDxE' />
                </a>

                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#:~:text=C%23%20(%2F%CB%8Csi%CB%90%20%CB%88,Paradigm'>
                    <div className={styles.grid_el_overlay}><h1>C#</h1></div>
                    <img src='https://miro.medium.com/v2/resize:fit:1400/1*_NVBTVdmjt3Qvq3CZOySXg.png' alt='C#' />
                </a>   
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/C%2B%2B'>
                    <div className={styles.grid_el_overlay}><h1>C++</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png' alt='C++' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/C_(programming_language)'>
                    <div className={styles.grid_el_overlay}><h1>C</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg' alt='C' />
                </a>
                
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Haskell'>
                    <div className={styles.grid_el_overlay}><h1>Haskell</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_Haskell_programming_language.svg/375px-Logo_of_the_Haskell_programming_language.svg.png' alt='Haskell' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Unix'>
                    <div className={styles.grid_el_overlay}><h1>Unix</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/UNIX_logo.svg/122px-UNIX_logo.svg.png' alt='Unix' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Bash_(Unix_shell)'>
                    <div className={styles.grid_el_overlay}><h1>Bash</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/216px-Gnu-bash-logo.svg.png' alt='Bash' />
                </a>
                <a className={styles.grid_el} href='https://en.wikipedia.org/wiki/Tailwind_CSS'>
                    <div className={styles.grid_el_overlay}><h1>Tailwind</h1></div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/200px-Tailwind_CSS_logo.svg.png' alt='Tailwind' />
                </a>
                {/*
                <a className={styles.grid_el} href='ADDRESS_TO_WIKI'>
                    <div className={styles.grid_el_overlay}><h1>NAME</h1></div>
                    <img src='ADDRESS_TO_WIKI_PNG' />
                </a>
                */}
            </div>
        </section>
    )
})

export default experience_main
