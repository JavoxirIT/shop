import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Search() {
    return (
        <div style={styles.block}>
            <input style={styles.input} type='text' placeholder='Search...' />
            <button style={styles.button}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    block: {
        border: '1px solid var(--color9)',
        padding: '0 5px 0 5px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '450px',
    },
    input: {
        borderRadius: '10px',
        width: '100%',
        padding: '10px 20px',
        fontSize: '18px',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
    },
};
