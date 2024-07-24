/** @jsxImportSource @emotion/react */
import React from 'react';
import { Global, css } from '@emotion/react';
import { Theme } from '.';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: Theme) => css`
      body {
        margin: 0;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-size: 20px;
        font-family: "Tahoma", sans-serif;
      },
      #root {
        display: grid;
        gap: ${theme.root.gap};
        grid-template-columns: ${theme.root.gridTemplateColumns};
        padding: ${theme.root.padding};
        p {
          margin: 0;
        }
      }
    `}
  />
);

export default GlobalStyles;
