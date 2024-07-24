import { Theme } from './index';
import baseTheme from './baseTheme';

const lightTheme: Theme = {
    ...baseTheme,
    colors: {
        background: '#fff',
        text: '#171717',
        selectBackground: '#f0f0f0',
        selectText: '#000',
        border: '#000',
        mainNavBackground: 'transparent',
        mainNavText: '#171717',
    },
} as Theme;

export default lightTheme;
