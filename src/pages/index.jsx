import Head from 'next/head';
import { Header, Content, Footer } from '../components';

const Main = () => {
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