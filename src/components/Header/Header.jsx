import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className={styles.wrapper}
        >
            <header
                className={styles.header}
            >
                <div
                    className={styles.title}
                    onClick={() => window.location.reload()}
                >
                    <span className={styles.a}>a</span>
                    <AnimatePresence>
                        {['l', 'i', 'c', 'e'].map((letter, index) => (
                            scrollY < 70 && (
                                <motion.span
                                    key={index}
                                    initial={{
                                        opacity: 0.5,
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0.5,
                                        scale: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                        )))}
                    </AnimatePresence>
                </div>

                <nav>
                    <ul
                        className={styles.navList}
                        onMouseLeave={() => setActiveLink(null)}
                    >
                        <AnimatePresence>
                            {navEntries.map((entry, index) => (
                                <motion.li 
                                    key={index}
                                    onMouseEnter={() => setActiveLink(entry)}
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1,
                                    }}
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
                                                            opacity: 0.3,
                                                            transform: 'scale(0.95)',
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            transform: 'scale(1)',
                                                        }}
                                                        exit={{
                                                            opacity: 0.3,
                                                            transform: 'scale(0.95)',
                                                        }}
                                                        transition={{
                                                            duration: 0.15,
                                                            ease: 'linear',
                                                        }}
                                                    />
                                                )
                                            }
                                        </AnimatePresence>
                                    </a>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </nav>
            </header>
        </motion.div>
    );
}

export default Header