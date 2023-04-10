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

    const randomHeight_a = (boolean) => {
        if (boolean) {
            const height = Math.floor(Math.random() * 41);
            return { height: `${height}%` };
        }
        return { height: `0%` };
    };

    const randomHeight_b = (boolean) => {
        if (boolean) {
            const height = 30 + Math.floor(Math.random() * 31);
            return { height: `${height}%` };
        }
        return { height: `0%` };
    };

    return (
        <>
            <button className={styles.nav_mobile_button} aria-label="navigation-button" onClick={toggleMenu}>
                <div className={`${styles.rectangle} ${isOpen ? styles.rectangle_active : ''} `}></div>
                <div className={`${styles.rectangle} ${isOpen ? styles.rectangle_active : ''} `}></div>
                <div className={`${styles.rectangle} ${isOpen ? styles.rectangle_active : ''} `}></div>
            </button>

            <nav className={`${styles.nav_mobile} ${isOpen ? styles.nav_mobile_appear : ''} `}>
                <div className={styles.color_box}>
                    <div className={styles.nav_color_cont}>
                        <div className={styles.nav_color_w} style={randomHeight_a(isOpen)}></div>
                        <div className={styles.nav_color_p} style={randomHeight_b(isOpen)}></div>
                    </div>
                    <div className={styles.nav_color_cont}>
                        <div className={styles.nav_color_w} style={randomHeight_a(isOpen)}></div>
                        <div className={styles.nav_color_g} style={randomHeight_b(isOpen)}></div>
                    </div>
                    <div className={styles.nav_color_cont}>
                        <div className={styles.nav_color_w} style={randomHeight_a(isOpen)}></div>
                        <div className={styles.nav_color_y} style={randomHeight_b(isOpen)}></div>
                    </div>
                    <div className={styles.nav_color_cont}>
                        <div className={styles.nav_color_w} style={randomHeight_a(isOpen)}></div>
                        <div className={styles.nav_color_b} style={randomHeight_b(isOpen)}></div>
                    </div>
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
                <Link href="/#home" aria-label="home" className={`${styles.nav_desktop_button} ${intersectingSection === "home" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
                <Link href="/#about" aria-label="about" className={`${styles.nav_desktop_button} ${intersectingSection === "about" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
                <div className={styles.nav_desktop_btn_cont}>
                    <Link href="/#projects" aria-label="projects" className={`${styles.nav_desktop_button} ${intersectingSection === "projects" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
                    <Link href="/projects" aria-label="projects-grid" className={`${styles.nav_desktop_button} ${intersectingSection === "projectsapp" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
                </div>
                <div className={styles.nav_desktop_btn_cont}>
                    <Link href="/#experience" aria-label="experience" className={`${styles.nav_desktop_button} ${intersectingSection === "experience" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
                    <button aria-label="experience-grid" className={styles.nav_desktop_button}></button>
                </div>
                <Link href="/#contact" aria-label="contact" className={`${styles.nav_desktop_button} ${intersectingSection === "contact" ? styles.nav_desktop_btn_active : styles.nav_desktop_btn_inactive} `}></Link>
            </nav>
        </>
    )
}