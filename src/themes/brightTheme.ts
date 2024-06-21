// src/themes/brightTheme.ts
import { Theme } from './index';

const brightTheme: Theme = {
    grid: {
        columns: '1fr 1fr',
        rows: '1fr 1fr',
        horizPadding: '0px',
        vertPadding: '0px',
        gap: '100px 50px',
    },
    colors: {
        background: '#ff0',
        text: '#000',
        selectBackground: '#FF69B4',
        selectText: '#fff',
        border: '#000',
    },
    typography: {
        fontFamily: '"Georgia", serif',
        fontSize: '16px',
    },
    spacing: {
        padding: '8px',
        margin: '16px 0',
    },
};

export default brightTheme;
