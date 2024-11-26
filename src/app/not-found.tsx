import React from 'react';
import Link from 'next/link'

const styles = {
    notFoundContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: '#61dafb',
        textAlign: 'center' as 'center',
        fontFamily: "'Courier New', Courier, monospace",
    },
    notFoundTitle: {
        fontSize: '10rem',
        margin: 0,
    },
    notFoundMessage: {
        fontSize: '1.5rem',
        margin: '1rem 0',
    },
    notFoundLink: {
        fontSize: '1.2rem',
        color: '#61dafb',
        textDecoration: 'none',
        border: '2px solid #61dafb',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    },
    notFoundLinkHover: {
        backgroundColor: '#61dafb',
        color: '#282c34',
    },
    geekyMessage: {
        fontSize: '1rem',
        marginTop: '2rem',
        color: '#f39c12',
    },
};
const Message = 'The page you\'re looking for does not exist here. Check the URL or go back home.';
const cheekyMessage = 'It looks like you took a "Wrong Turn"'
const NotFound = () => {
    return (
        <div style={styles.notFoundContainer}>
            <h1 style={styles.notFoundTitle}>404</h1>
            <p style={styles.notFoundMessage}>{Message}</p>
            <Link href="/" style={styles.notFoundLink}>Go back home</Link>
            <p style={styles.geekyMessage}>{cheekyMessage}</p>
        </div>
    );
};

export default NotFound;