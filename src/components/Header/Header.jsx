import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const navEntries = [
    {
        title: 'Home',
        link: '#home',
        icon:   <>
                    <polyline points='5 12 3 12 12 3 21 12 19 12'></polyline>
                    <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
                    <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6'></path>
                </>
    },
    {
        title: 'About',
        link: '#about',
        icon:   <>
                    <circle cx='12' cy='7' r='4'></circle>
                    <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
                </>
    },
    {
        title: 'Projects',
        link: '#projects',
        icon:   <>
                    <path d='M4 5h7' />
                    <path d='M9 3v2c0 4.418 -2.239 8 -5 8' />
                    <path d='M5 9c-.003 2.144 2.952 3.908 6.7 4' />
                    <path d='M12 20l4 -9l4 9' />
                    <path d='M19.1 18h-6.2' />
                </>
    },
    {
        title: 'Contact',
        link: '#contact',
        icon:   <>
                    <rect x='3' y='5' width='18' height='14' rx='2'></rect>
                    <polyline points='3 7 12 13 21 7'></polyline>
                </>
    },
    {
        title: ['Light'],
        link: '#theme',
        icon:   <>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </>,
        icon2:  <>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                </>
    }
];

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const menu = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        document.body.addEventListener('click', (event) => {
            if (menu.current && !menu.current.contains(event.target)) {
                setShowMenu(false);
            }
        });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (scrollY < 70) {
            setShowMenu(false);
        }
    }, [scrollY]);

    return (
        <motion.div
            className={styles.wrapper}
        >
            <header
                className={styles.header}
            >
                <a
                    className={styles.title}
                    href='/'
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
                </a>

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
                                ref={menu}
                                key={styles.menuToggle}
                                className={styles.menu}
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
                                style={{
                                    border: showMenu ? '1px solid var(--foreground-tertiary)' : '1px solid transparent',
                                    backdropFilter: showMenu ? 'blur(10px)' : 'blur(0px)',
                                }}
                            >
                                <button
                                    onClick={() => setShowMenu(!showMenu)}
                                    className={styles.menuToggle}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                    >
                                        <line x1='4' y1='8' x2='20' y2='8'></line>
                                        <line x1='4' y1='16' x2='20' y2='16'></line>
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {showMenu && (
                                        <motion.div
                                            className={styles.menuContent}
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
                                                className={styles.navListMenu}
                                                onMouseLeave={() => setActiveLink(null)}
                                            >   
                                                {navEntries.map((entry, index) => (
                                                    <motion.li
                                                        key={index}
                                                        onMouseEnter={() => setActiveLink(entry)}
                                                        style={{
                                                            display: 'flex',
                                                        }}
                                                    >
                                                        <a
                                                            href={entry.link}
                                                            className={styles.navLinkMenu}
                                                            style={{
                                                                color: entry === activeLink
                                                                    ? 'var(--foreground-secondary)'
                                                                    : 'var(--foreground-tertiary)',
                                                            }}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                viewBox='0 0 24 24'
                                                            >
                                                                {entry.icon}
                                                            </svg>

                                                            <AnimatePresence>
                                                                {
                                                                    entry === activeLink && (
                                                                        <motion.div
                                                                            className={styles.navLinkMenuTooltip}
                                                                            initial={{
                                                                                opacity: 0,
                                                                                transform: 'scale(0) translateY(-50%)',
                                                                            }}
                                                                            animate={{
                                                                                opacity: 1,
                                                                                transform: 'scale(1) translateY(-50%)',
                                                                            }}
                                                                            exit={{
                                                                                opacity: 0,
                                                                                transform: 'scale(0) translateY(-50%)',
                                                                            }}
                                                                            transition={{
                                                                                duration: 0.15,
                                                                                ease: 'linear',
                                                                                delay: 0.5,
                                                                            }}
                                                                        >
                                                                            {entry.title}
                                                                        </motion.div>
                                                                    )
                                                                }
                                                            </AnimatePresence>
                                                        </a>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </header>
        </motion.div>
    );
}

export default Header