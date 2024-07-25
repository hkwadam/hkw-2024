/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, css } from '@emotion/react';
import { Theme } from '.';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      @font-face {
        font-family: 'GrandGothic';
        src: url('/src/fonts/PFGrandGothik.otf') format('opentype');
        font-weight: 100 900;
        font-stretch: 75% 150%;
      }
      html {
        font-size: 24px;
        @media (max-width: 1440px) {
          font-size: 16px;
        }
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
      body {
        margin: 0;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: "neue-haas-grotesk-display", sans-serif;
        font-weight: 400;
        font-style: normal;
      },
      #root {
        display: grid;
        gap: ${theme.root.gap};
        grid-template-columns: ${theme.root.gridTemplateColumns};
        padding: ${theme.root.padding};
      }
      p {
        margin: 0;
      }
    `}
  />
);

export default GlobalStyles;
