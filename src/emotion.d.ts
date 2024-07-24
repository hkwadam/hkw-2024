import '@emotion/react';
import { Theme as CustomTheme } from './themeing';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}