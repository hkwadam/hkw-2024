/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, css } from '@emotion/react';
import { Theme } from '.';
// TODO: figure out how to make the text fit for tablet better its not super responsive
// for example see the were changing everything header
const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      html {
        font-size: 24px;
        @media (min-width: 1441px) {
          font-size: 1.389vw;
        }
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
        @media (max-width: 1080px) {
            padding: ${theme.root.tabletPadding};
        }
        @media (max-width: 600px) {
            padding: ${theme.root.mobilePadding};
        }
      }
      p {
        margin: 0;
      }
      div {
        box-sizing: border-box;
      }
      @keyframes slideIn {
        from {
          transform: translateY(500px);
        }
        to {
          transform: translateY(0);
        }
      }
    `}
  />
);

export default GlobalStyles;
