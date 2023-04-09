import styles from './1nav.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav({ intersectingSection }) {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);
    const anchorClick = () => setOpen(!isOpen);

    const router = useRouter()
    const pathname = router.pathname

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
                    <li className={styles.menu_top}>$CONWAY_HASH</li>
                    <Link href='/#home' onClick={anchorClick}><li>HOME</li></Link>
                    <Link href='/#about' onClick={anchorClick}><li>ABOUT</li></Link>
                    <Link href='/#projects' onClick={anchorClick}><li>PROJECTS</li></Link>
                    <Link href='/#experience' onClick={anchorClick}><li>EXPERIENCE</li></Link>
                    <Link href='/#contact' onClick={anchorClick}><li>CONTACT</li></Link>
                </ul>
            </nav>

            <nav className={styles.nav_desktop}>
                <Link href="/#home" className={`${styles.nav_desktop_button} ${intersectingSection === "home" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
                <Link href="/#about" className={`${styles.nav_desktop_button} ${intersectingSection === "about" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
                <div className={styles.nav_desktop_btn_cont}>
                    <Link href="/#projects" className={`${styles.nav_desktop_button} ${intersectingSection === "projects" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
                    <Link href="/projects" className={`${styles.nav_desktop_button} ${intersectingSection === "projectsapp" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
                </div>
                <div className={styles.nav_desktop_btn_cont}>
                    <Link href="/#experience" className={`${styles.nav_desktop_button} ${intersectingSection === "experience" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
                    <button className={styles.nav_desktop_button}></button>
                </div>
                <Link href="/#contact" className={`${styles.nav_desktop_button} ${intersectingSection === "contact" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive}`}></Link>
            </nav>
        </>
    )
}