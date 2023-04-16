import Nav from './1nav';
import Landing from './2landing';
import About from './3about';
import Projects from './4projects';
import Projects_main from './4projects_main'
import Experience from './5experience';
import Experience_main from './5experience_main';
import Contact from './6contact';
import Conway from './7conway';


import styles from './0app.module.css'
import { useState, useEffect, useRef } from 'react';

export default function App() {

    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];
    const [intersectingSection, setIntersectingSection] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIntersectingSection(entry.target.id)
                    };
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const getContainerStyle = () => {
        switch (intersectingSection) {
            case 'landing':
                return { backgroundColor: 'rgba(var(--main-color),0.2)' };
            case 'about':
                return { backgroundColor: 'rgba(var(--blue-c),0.2)' };
            case 'projects':
                return { backgroundColor: 'rgba(var(--pink-c),0.2)' };
            case 'projects_main':
                return { backgroundColor: 'rgba(var(--pink-c),0.3)' };
            case 'experience':
                return { backgroundColor: 'rgba(var(--yellow-c),0.2)' };
            case 'experience_main':
                return { backgroundColor: 'rgba(var(--yellow-c),0.3)' };
            case 'contact':
                return { backgroundColor: 'rgba(var(--green-c),0.2)' };
            default:
                return {};
        }
    };

    return (
        <div className={styles.container} style={getContainerStyle()}>
            <Conway />
            <Nav intersectingSection={intersectingSection} />
            <Landing ref={sectionRefs[0]} prop={intersectingSection == 'landing' ? true : false} />
            <About ref={sectionRefs[1]} prop={intersectingSection == 'about' ? true : false} />
            <Projects ref={sectionRefs[2]} prop={intersectingSection == 'projects' ? true : false} />
            <Projects_main ref={sectionRefs[3]} prop={intersectingSection == 'projects_main' ? true : false} />
            <Experience ref={sectionRefs[4]} prop={intersectingSection == 'experience' ? true : false} />
            <Experience_main ref={sectionRefs[5]} prop={intersectingSection == 'experience_main' ? true : false} />
            <Contact ref={sectionRefs[6]} prop={intersectingSection == 'contact' ? true : false} />
        </div>
    )
}