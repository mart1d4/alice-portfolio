import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <>
            <div
                className={styles.hero}
            >
                <div
                    className={styles.hero__content}
                >
                    <h2>
                        A new way to translate
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam
                    </p>
                </div>

                <div
                    className={styles.hero__buttons}
                >
                    <motion.button
                        whileHover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.995 }}
                    >
                        See my work
                    </motion.button>

                    <motion.button>
                        Contact me &gt;
                    </motion.button>
                </div>
            </div>

            <div
                className={styles.hero}
            >
                <div
                    className={styles.hero__content}
                >
                    <h2>
                        A new way to translate
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam
                    </p>
                </div>

                <div
                    className={styles.hero__buttons}
                >
                    <motion.button
                        whileHover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.995 }}
                    >
                        See my work
                    </motion.button>

                    <motion.button>
                        Contact me &gt;
                    </motion.button>
                </div>
            </div>
        </>
    );
}
