import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

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

    return (
        <div
            className={styles.wrapper}
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
                        {navEntries.map((entry) => (
                            <li 
                                key={entry}
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
        </div>
    );
}

export default Header