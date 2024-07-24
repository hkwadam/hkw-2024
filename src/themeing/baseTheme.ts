import { Theme } from './index';

const baseTheme: Partial<Theme> = {
  root: {
    padding: '0 60px',
    gridTemplateColumns: 'repeat( 12, 1fr)',
    gap: '16px',
  },
  nav: {
    padding: '36px 0',
    buttonBackground: 'transparent',
    buttonColor: '#fff',
    buttonPadding: '0',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '23px',
  },
};

export default baseTheme;
