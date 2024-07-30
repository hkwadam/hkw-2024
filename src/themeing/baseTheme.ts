import { Theme } from './index';

const baseTheme: Partial<Theme> = {
  root: {
    padding: '0 60px',
    mobilePadding: '0 20px',
    tabletPadding: '0 20px',
    gridTemplateColumns: 'repeat( 12, 1fr)',
    gap: '0 16px',
  },
  nav: {
    padding: '2rem 0 5rem 0',
    mobilePadding: '20px 0 0 0',
    tabletPadding: '24px 0',
    buttonBackground: 'transparent',
    buttonColor: '#fff',
    buttonPadding: '0',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '23px',
  },
};

export default baseTheme;
