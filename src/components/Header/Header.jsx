import styles from './Header.module.css';
import { motion } from 'framer-motion';
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
                >
                    <Link
                        href='/'
                        scroll={true}
                    >
                        <span className={styles.a}>a</span>lice
                    </Link>
                </h1>

                <nav>
                    <ul
                        className={styles.ul}
                        onMouseLeave={() => setActiveLink(null)}
                    >
                        {navEntries.map((entry, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => setActiveLink(entry)}
                            >
                                <Link
                                    href={entry.link}
                                    scroll={true}
                                    className={entry === activeLink ? styles.active : styles.link}
                                >
                                    {entry.title}
                                    {entry === activeLink ? (
                                        <motion.div
                                            layoutId={styles.background}
                                            className={styles.background}
                                            transition={{ duration: 0.15, type: 'spring', stiffness: 300, damping: 150000 }}
                                        />
                                    ) : null}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header