import styles from './Content.module.css';
import { Hero } from './ContentSections';
import { motion } from 'framer-motion';

const contentSections = [
    <Hero />,
    <Hero />,
    <Hero />,
    <Hero />,
    <Hero />,
    <Hero />,
    <Hero />,
];

const Content = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <main
                className={styles.main}
            >
                {contentSections.map((section) => (
                    <motion.section
                        key={section}
                        className={styles.section}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        viewport={{ once: true }}
                    >
                        {section}
                    </motion.section>
                ))}
            </main>
        </div>
    );
}

export default Content