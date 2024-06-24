// src/themes/lightTheme.ts
import { Theme } from './index';

const lightTheme: Theme = {
    global: {
        padding: '16px 32px',
    },
    grid: {
        columns: 'repeat( 8, 1fr)',
        horizPadding: '8px',
        gap: '10px 20px',
    },
    colors: {
        background: '#89CFF0',
        text: '#000',
        selectBackground: '#f0f0f0',
        selectText: '#000',
        border: '#000',
    },
    typography: {
        fontFamily: '"Arial", sans-serif',
        fontSize: '16px',
    },
    spacing: {
        padding: '8px',
        margin: '16px 0',
    },
};

export default lightTheme;
