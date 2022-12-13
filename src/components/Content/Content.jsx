import styles from './Content.module.css';
import { Hero } from './ContentSections';
import { motion } from 'framer-motion';

const contentSections = [
    {
        id: 'home',
        component: <Hero />,
    },
    {
        id: 'about',
        component: <Hero />,
    },
    {
        id: 'projects',
        component: <Hero />,
    },
    {
        id: 'contact',
        component: <Hero />,
    },
    {
        id: 'theme',
        component: <Hero />,
    },
];

const Content = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <main
                className={styles.main}
            >
                {contentSections.map((section, index) => (
                    <motion.section
                        key={index}
                        className={styles.section}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut',
                            },
                        }}
                        initial={{
                            opacity: 0,
                            y: 200,
                        }}
                        viewport={{ once: true }}
                        id={section.id}
                    >
                        {section.component}
                    </motion.section>
                ))}
            </main>
        </div>
    );
}

export default Content