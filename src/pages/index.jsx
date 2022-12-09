import Head from 'next/head';
import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>
            <main
                className={styles.main}
            >
                Working properly
            </main>
        </>
    );
}

export default Main