import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <>
            <div
                className={styles.hero}
            >
                <div
                    className={styles.content}
                >
                    <h2>
                        A new way to translate
                    </h2>
                    <p
                        className={styles.text}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam.
                    </p>

                    <div
                        className={styles.buttons}
                    >
                        <motion.button
                            className={styles.buttonPrimary}
                            whileTap={{ scale: 0.985 }}
                        >
                            See my work
                        </motion.button>

                        <motion.button
                            className={styles.buttonSecondary}
                        >
                            Contact me
                        </motion.button>
                    </div>
                </div>
            </div>

            <div
                className={styles.hero}
            >
                <div
                    className={styles.content}
                >
                    <h2>
                        A new way to translate
                    </h2>
                    <p
                        className={styles.text}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam lacinia, nunc nisl aliquam
                    </p>

                    <div
                        className={styles.buttons}
                    >
                        <motion.button
                            className={styles.buttonPrimary}
                            whileTap={{ scale: 0.985 }}
                        >
                            See my work
                        </motion.button>

                        <motion.button
                            className={styles.buttonSecondary}
                        >
                            Contact me
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    );
}
