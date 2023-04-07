import styles from './1nav.module.css'
import { useState } from 'react';

export default function Nav({ intersectingSection }) {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    const anchorClick = () => setOpen(!isOpen);

    console.log(intersectingSection)

    return (
        <>
            <button className={styles.nav_mobile_button} onClick={toggleMenu}>
                <svg className={`${styles.svg} ${isOpen ? styles.svg_active : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>

            <nav className={`${styles.nav_mobile} ${isOpen ? styles.nav_mobile_appear : ''}`}>
                <div className={styles.color_box}>
                    <div className={`${styles.nav_color} ${styles.nav_color_p} ${isOpen ? styles.nav_color_a_a : ''}`}></div>
                    <div className={`${styles.nav_color} ${styles.nav_color_g} ${isOpen ? styles.nav_color_a_b : ''}`}></div>
                    <div className={`${styles.nav_color} ${styles.nav_color_y} ${isOpen ? styles.nav_color_a_c : ''}`}></div>
                    <div className={`${styles.nav_color} ${styles.nav_color_b} ${isOpen ? styles.nav_color_a_d : ''}`}></div>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.menu_top}>CONWAY_HASH$</li>
                    <a href='#home' onClick={anchorClick}><li>HOME</li></a>
                    <a href='#about' onClick={anchorClick}><li>ABOUT</li></a>
                    <a href='#projects' onClick={anchorClick}><li>PROJECTS</li></a>
                    <a href='#experience' onClick={anchorClick}><li>EXPERIENCE</li></a>
                    <a href='#contact' onClick={anchorClick}><li>CONTACT</li></a>
                </ul>
            </nav>

            <nav className={styles.nav_desktop}>
                <a href="#home" className={`${styles.nav_desktop_button} ${intersectingSection === "home" ? styles.nav_desktop_btn_active : ""}`}></a>
                <a href="#about" className={`${styles.nav_desktop_button} ${intersectingSection === "about" ? styles.nav_desktop_btn_active : ""}`}></a>
                <div className={styles.nav_desktop_btn_cont}>
                    <a href="#projects" className={`${styles.nav_desktop_button} ${intersectingSection === "projects" ? styles.nav_desktop_btn_active : ""}`}></a>
                    <button className={styles.nav_desktop_button}></button>
                </div>
                <div className={styles.nav_desktop_btn_cont}>
                    <a href="#experience" className={`${styles.nav_desktop_button} ${intersectingSection === "experience" ? styles.nav_desktop_btn_active : ""}`}></a>
                    <button className={styles.nav_desktop_button}></button>
                </div>
                <a href="#contact" className={`${styles.nav_desktop_button} ${intersectingSection === "contact" ? styles.nav_desktop_btn_active : ""}`}></a>
            </nav>
        </>
    )
}