import styles from './Content.module.css';
import { Hero } from './ContentSections';

const Content = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <main
                className={styles.main}
            >
                <Hero />
            </main>
        </div>
    );
}

export default Content