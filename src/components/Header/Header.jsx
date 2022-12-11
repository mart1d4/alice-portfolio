import styles from './Header.module.css';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState } from 'react';

const navEntries = [
    {
        title: 'Home',
        link: '#home'
    },
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'Projects',
        link: '#projects'
    },
    {
        title: 'Contact',
        link: '#contact'
    }
];

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const { scrollY } = useScroll();

    return (
        <motion.div
            className={styles.wrapper}
            style={{
                boxShadow: scrollY > 70
                    ? '0 0 10px rgba(0, 0, 0, 0.2)'
                    : 'none',
            }}
        >
            <header
                className={styles.header}
            >
                <h1
                    className={styles.title}
                    onClick={() => window.location.reload()}
                >
                    <span className={styles.a}>a</span>lice
                </h1>

                <nav>
                    <ul
                        className={styles.navList}
                        onMouseLeave={() => setActiveLink(null)}
                    >
                        {navEntries.map((entry, index) => (
                            <li 
                                key={index}
                                onMouseEnter={() => setActiveLink(entry)}
                            >
                                <a
                                    href={entry.link}
                                    className={styles.navLink}
                                    style={{
                                        color: entry === activeLink
                                            ? 'var(--foreground-secondary)'
                                            : 'var(--foreground-tertiary)',
                                    }}
                                >
                                    {entry.title}

                                    <AnimatePresence>
                                        {
                                            entry === activeLink && (
                                                <motion.div
                                                    key={entry}
                                                    className={styles.navLinkBackground}
                                                    layoutId={styles.navLinkBackground}
                                                    initial={{
                                                        opacity: 0.5,
                                                        transform: 'scale(0.9)',
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        transform: 'scale(1)',
                                                    }}
                                                    exit={{
                                                        opacity: 0.5,
                                                        transform: 'scale(0.9)',
                                                    }}
                                                    transition={{
                                                        duration: 0.15,
                                                    }}
                                                />
                                            )
                                        }
                                    </AnimatePresence>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </motion.div>
    );
}

export default Header