import Head from 'next/head';
import { useEffect } from 'react';
import { Header, Content, Footer } from '../components';

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Head>
                <title>Alice | Traductrice</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default Main