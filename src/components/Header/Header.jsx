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
    const [showMenu, setShowMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        handleScroll();
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
                                        opacity: 0,
                                        y: -55,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -55,
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

                <AnimatePresence mode='wait'>
                    {scrollY < 70
                        ? (
                            <motion.nav
                                key={styles.nav}
                                initial={{
                                    opacity: 0,
                                    y: -30,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -30,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
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
                                                    y: -55,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -55,
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
                            </motion.nav>
                        )
                        : (
                            <motion.div
                                onClick={() => setShowMenu(!showMenu)}
                                key={styles.menuToggle}
                                className={styles.menuToggle}
                                whileHover='hover'
                                initial={{
                                    opacity: 0,
                                    x: +500,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: +500,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: 'circOut',

                                }}
                            >
                                <div>
                                    <motion.div
                                    >
                                    </motion.div>
                                    <div
                                        style={{
                                            opacity: showMenu ? 0 : 1,
                                        }}
                                    >
                                    </div>
                                    <motion.div
                                    >
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                </AnimatePresence>
            </header>
        </motion.div>
    );
}

export default Header