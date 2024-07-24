import { Theme } from './index';
import baseTheme from './baseTheme';

const darkTheme: Theme = {
    ...baseTheme,
    colors: {
        background: '#171717',
        text: '#fff',
        selectBackground: '#555',
        selectText: '#fff',
        border: '#fff',
        mainNavBackground: 'transparent',
        mainNavText: '#fff',
    },
} as Theme;

export default darkTheme;