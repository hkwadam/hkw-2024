// src/themes/darkTheme.ts
import { Theme } from './index';

const darkTheme: Theme = {
    grid: {
        columns: '1fr 1fr 1fr 1fr',
        rows: '1fr 1fr 1fr 1fr',
        horizPadding: '16px',
        vertPadding: '16px',
        gap: '0px 200px',
    },
    colors: {
        background: '#333',
        text: '#fff',
        selectBackground: '#555',
        selectText: '#fff',
        border: '#fff',
    },
    typography: {
        fontFamily: '"Tahoma", sans-serif',
        fontSize: '16px',
    },
    spacing: {
        padding: '8px',
        margin: '16px 0',
    },
};

export default darkTheme;