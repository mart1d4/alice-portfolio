import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <footer
                className={styles.footer}
            >
                <p>
                    {new Date().getFullYear()} &copy; Alice - All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer